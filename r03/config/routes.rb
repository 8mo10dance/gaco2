Rails.application.routes.draw do
  resources :users
  resource :upload_image, only: :show

  namespace :api do
    namespace :v1 do
      resource :upload_s3_url, only: :show
    end
  end
end
