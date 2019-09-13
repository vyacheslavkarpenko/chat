Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :messages
    end
  end
    root 'messages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
