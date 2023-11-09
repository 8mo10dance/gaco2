CarrierWave.configure do |config|
  config.storage = :fog
  config.cache_storage = :fog
  config.fog_provider = 'fog/aws'
  config.fog_directory = ENV.fetch('AWS_S3_BUCKET')
  config.fog_credentials = {
    provider: 'AWS',
    region:            ENV.fetch('AWS_REGION'),
    aws_access_key_id:     ENV.fetch('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key: ENV.fetch('AWS_SECRET_ACCESS_KEY'),
    endpoint: ENV.fetch('AWS_ENDPOINT'),
    path_style: true,
  }
end
