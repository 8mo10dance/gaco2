#!/bin/bash

awslocal s3 mb s3://mybucket
awslocal s3api put-bucket-cors --bucket mybucket --cors-configuration file://cors.json
cd /home/localstack/data/
awslocal s3 cp myinitialdata.txt s3://mybucket/
