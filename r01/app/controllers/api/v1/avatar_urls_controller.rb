class Api::V1::AvatarUrlsController < ApplicationController
  def show
    render json: { url: "http://localhost:4566/microposts/tmp_uploads/#{params[:filename]}" }
  end
end
