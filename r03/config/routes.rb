Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resource :hoge, only: :show
  resource :fuga, only: :show
end
