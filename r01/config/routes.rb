Rails.application.routes.draw do
  resources :users

  namespace :api do
    namespace :v1 do
      resource :avatar_upload_url, only: :show
      resources :user_avatars, only: :create
    end
  end
end
