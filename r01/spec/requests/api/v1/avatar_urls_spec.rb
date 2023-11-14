require 'rails_helper'

RSpec.describe "Api::V1::AvatarUrls", type: :request do
  describe "GET /api/v1/avatar_url" do
    it "returns http success" do
      get "/api/v1/avatar_url", params: { filename: 'dummy' }
      expect(response).to have_http_status(:success)
    end
  end
end
