require 'aws-sdk-s3'

s3 = Aws::S3::Resource.new(
  endpoint: 'http://localstack:4566',
  force_path_style: true,
)

bucket = s3.bucket('microposts')
obj = bucket.object('uploads/README.md')

obj.upload_file('./README.md')
