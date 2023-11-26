import boto3
from PIL import Image
from io import BytesIO

s3_client = boto3.client('s3', endpoint_url='http://localstack:4566', verify=False)

def handler(event, context):
    # Lambda関数から受け取ったイベントデータからバケット名とファイル名（キー）を取得
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    object_key = event['Records'][0]['s3']['object']['key']

    try:
        # S3から画像をダウンロード
        response = s3_client.get_object(Bucket=bucket_name, Key=object_key)
        image_data = response['Body'].read()

        # 画像を開く
        image = Image.open(BytesIO(image_data))

        # EXIFメタデータを削除（EXIF情報を除いて新しい画像オブジェクトを作成）
        image_without_exif = Image.new(image.mode, image.size)
        image_without_exif.putdata(list(image.getdata()))

        # メモリ上に画像を保存
        buffer = BytesIO()
        image_without_exif.save(buffer, format=image.format)
        buffer.seek(0)

        # 画像をS3に再アップロード（上書き）
        s3_client.put_object(Bucket=bucket_name, Key=object_key, Body=buffer)

        return {
            'statusCode': 200,
            'body': 'EXIF メタデータを除去しました。'
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': f'エラーが発生しました: {str(e)}'
        }
