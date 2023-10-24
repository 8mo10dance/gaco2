CarrierWave.configure do |config|
  config.storage = :aws
  config.cache_storage = :aws
  config.aws_bucket = ENV.fetch('AWS_S3_BUCKET')
  config.asset_host = ENV.fetch('AWS_S3_ASSET_HOST')
  config.aws_credentials = {
    region:            ENV.fetch('AWS_REGION'),
    access_key_id:     ENV.fetch('AWS_ACCESS_KEY_ID'),
    secret_access_key: ENV.fetch('AWS_SECRET_ACCESS_KEY'),
    endpoint: ENV.fetch('AWS_ENDPOINT'),
    force_path_style: true,
  }
end
