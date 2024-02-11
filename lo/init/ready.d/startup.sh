#!/bin/bash

awslocal s3 mb s3://mybucket
awslocal s3 cp /home/localstack/data/myinitialdata.txt s3://mybucket/
