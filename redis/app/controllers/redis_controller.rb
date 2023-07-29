class RedisController < ApplicationController
  def hoge
    Rails.cache.write('name', 'hogehoge') if params[:id].to_i > 0
    render json: Rails.cache.exist?('name')
  end
end
