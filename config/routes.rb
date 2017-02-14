Rails.application.routes.draw do
  root to: "static#index"
  get '/games/new' => 'games#create'
  get '/static/index' => 'static#index'
  post '/users/new' => 'users#new'
  post '/users/login' => 'users#login'
  put '/cards/:id' => 'cards#update'
  post '/cards' => 'cards#new'

end
