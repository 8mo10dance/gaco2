terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.26"
    }
  }
  backend "local" {}
}

provider "aws" {
  region     = "ap-northeast-1"
  access_key = "test"
  secret_key = "test"

  s3_use_path_style = true
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    s3 = "http://localstack:4566"
    lambda = "http://localstack:4566"
    iam = "http://localstack:4566"
  }
}

resource "aws_s3_bucket" "my_bucket" {
  bucket = "microposts"
}

resource "aws_s3_bucket_cors_configuration" "my_bucket" {
  bucket = aws_s3_bucket.my_bucket.id

  cors_rule {
    allowed_methods = ["PUT"]
    allowed_origins = ["*"]
  }
}

resource "aws_lambda_function" "my_lambda" {
  function_name = "my_lambda_function"
  role = aws_iam_role.lambda_role.arn
  package_type = "Image"
  image_uri = "lambda_function"
}

resource "aws_s3_bucket_notification" "bucket_notification" {
  bucket = aws_s3_bucket.my_bucket.id

  lambda_function {
    lambda_function_arn = aws_lambda_function.my_lambda.arn
    events              = ["s3:ObjectCreated:*"]
  }
}

resource "aws_lambda_permission" "allow_bucket" {
  statement_id  = "AllowExecutionFromS3Bucket"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.my_lambda.function_name
  principal     = "s3.amazonaws.com"
  source_arn    = aws_s3_bucket.my_bucket.arn
}

resource "aws_iam_role" "lambda_role" {
  name = "lambda_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        },
      },
    ],
  })
}

resource "aws_iam_policy_attachment" "lambda_execution_policy_attachment" {
  name       = "my_lambda_execution_policy_attachment"
  policy_arn = aws_iam_policy.lambda_execution_policy.arn
  roles      = [aws_iam_role.lambda_role.name]
}

resource "aws_iam_policy" "lambda_execution_policy" {
  name        = "lambda_execution_policy"
  description = "Policy for Lambda execution role"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "s3:GetObject",
          "s3:PutObject",
        ],
        Effect   = "Allow",
        Resource = ["arn:aws:s3:::microposts/*"]
      },
    ]
  })
}
