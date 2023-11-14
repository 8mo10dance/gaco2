module Api
  module V1
    class UserAvatarsController < ApplicationController
      def create
        filename = user_avatar_params[:filename]
        user_avatar = UserAvatar.new(image: filename)
        if user_avatar.invalid?
          return render json: { messages: user_avatar.errors.full_messages }, status: :unprocessable_entity
        end

        user_avatar.save!
        obj = bucket.object(user_avatar_params[:object_key])
        obj.copy_to(bucket.object(store_dir(user_avatar, 'image')))
        render json: { user_avatar_id: user_avatar.id }
      end

      private

      def user_avatar_params
        params.require(:user_avatar).permit(:object_key, :filename)
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

      def store_dir(model, mounted_as)
        "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
      end
    end
  end
end
