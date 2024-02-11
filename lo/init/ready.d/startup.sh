#!/bin/bash

awslocal s3 mb s3://mybucket
cd /home/localstack/data/
awslocal s3 cp myinitialdata.txt s3://mybucket/
