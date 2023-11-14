class Api::V1::UploadAvatarsController < ApplicationController
  def create
    file = params[:avatar]
    object_key = "#{upload_dir}/#{file.original_filename}"
    obj = bucket.object(object_key)
    obj.upload_file(file.tempfile, acl: 'public-read')
    render json: { url: public_url(file.original_filename), object_key: object_key }
  end

  private

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

  def upload_dir
    "tmp_uploads/#{uuid}"
  end

  def uuid
    @uuid ||= SecureRandom.uuid
  end

  def public_url(filename)
    "http://#{Settings.aws.s3.domain}/#{Settings.aws.s3.bucket}/#{upload_dir}/#{ERB::Util.url_encode(filename)}"
  end
end
