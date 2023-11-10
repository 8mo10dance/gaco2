Rails.application.routes.draw do
  resources :users

  namespace :api do
    namespace :v1 do
      resource :upload_s3_url, only: :show
    end
  end
end
