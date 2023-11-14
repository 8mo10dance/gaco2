class UserAvatar < ApplicationRecord
  belongs_to :user, optional: true

  def image_url
    obj = bucket.object(store_dir('image'))
    obj.public_url
  end

  def bucket
    @bucket ||= s3.bucket(Settings.aws.s3.bucket)
  end

  def s3
    @s3 ||=
      Aws::S3::Resource.new(
        endpoint: Settings.aws.endpoint,
        region: Settings.aws.region,
        force_path_style: true,
      )
  end

  def store_dir(mounted_as)
    "uploads/#{self.class.to_s.underscore}/#{mounted_as}/#{id}"
  end
end
