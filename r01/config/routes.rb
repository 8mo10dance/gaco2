Rails.application.routes.draw do
  resources :users

  namespace :api do
    namespace :v1 do
      resource :upload_avatar, only: :create
      resources :user_avatars, only: :create
    end
  end
end
