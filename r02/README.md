## LocalStack の動かし方

1. AWS CLI をインストールする

2. LocalStack 用のプロファイルを作成する
  ```bash
  $ aws configure --profile localstack
  AWS Access Key ID [None]: dummy
  AWS Secret Access Key [None]: dummy
  Default region name [None]: ap-northeast-1
  Default output format [None]: json
  ```

3. LocalStack を立ち上げる
  ```bash
  $ docker compose up -d
  ```
  `http://localhost:4566/health` にアクセスできればよい。

4. S3のバケットを作成する
  ```bash
  $ aws --endpoint-url=http://localhost:4566 --profile localstack s3api create-bucket --bucket microposts --create-bucket-configuration LocationConstraint=ap-northeast-1
  ```
  以下のコマンドでバケット一覧を確認できる。
  ```bash
  $ aws s3 ls --endpoint-url=http://localhost:4566 --profile localstack
  ```

## LocalStack に画像をアップできたかの確認

次のコマンドで確認できる。

```bash
$ aws s3 ls --endpoint-url=http://localhost:4566 --profile localstack s3://microposts --recursive
```
