CarrierWave.configure do |config|
  config.aws_attributes = {
    cache_control: 'max-age=2592000, s-maxage=2592000',
  }
  config.storage = :aws
  config.aws_bucket = ENV.fetch('S3_BUCKET')
  config.cache_storage = :aws
  config.asset_host = "#{ENV['S3_ASSET_HOST']}/#{ENV['S3_BUCKET']}"
  config.aws_credentials = {
    region:            ENV.fetch('S3_REGION'),
    access_key_id:     ENV.fetch('S3_ACCESS_KEY'),
    secret_access_key: ENV.fetch('S3_SECRET_KEY'),
    endpoint: ENV.fetch('S3_ENDPOINT')
  }
end
