require 'rails_helper'

RSpec.describe "Api::V1::AvatarUploadUrls", type: :request do
  describe "GET /api/v1/avatar_upload_url" do
    it "returns http success" do
      get "/api/v1/avatar_upload_url", params: { filename: 'dummy', content_type: 'image/jpg' }
      expect(response).to have_http_status(:success)
    end
  end
end
