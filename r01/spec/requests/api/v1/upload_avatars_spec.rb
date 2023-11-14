require 'rails_helper'

RSpec.describe "Api::V1::UploadAvatars", type: :request do
  describe "POST /api/v1/upload_avatar" do
    it "returns http success" do
      post "/api/v1/upload_avatar", params: { avatar: Rack::Test::UploadedFile.new(Rails.root.join('spec/fixtures/files/test_image.jpg'), 'image/jpeg') }
      expect(response).to have_http_status(:success)
    end
  end
end
