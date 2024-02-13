#!/bin/bash

awslocal s3 mb s3://mybucket
awslocal s3api put-bucket-cors --bucket mybucket --cors-configuration file:///etc/localstack/init/ready.d/cors.json
awslocal s3 cp /home/localstack/data/myinitialdata.txt s3://mybucket/
