Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do 

    resources :organizations, only: [:index, :create, :update, :show, :destroy]
    resources :users, only: [:update]
    resources :shifts, only: [:index, :show, :create]

    patch '/join/:id', to: 'organizations#join'
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    post '/forgot_password', to: 'passwords#forgot'
    post '/reset_password', to: 'passwords#reset'


  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
