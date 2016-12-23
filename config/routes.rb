Rails.application.routes.draw do
  root to: "static#index"
  get '/games/new' => 'games#create'
  get '/static/index' => 'static#index'
  post '/users/new' => 'users#new'
  put '/cards/:id' => 'cards#update'

end
