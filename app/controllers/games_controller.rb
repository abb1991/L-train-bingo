class GamesController < ApplicationController

  def create
    @game = Game.new(user_id: current_user.id, title: params[title])
    if @game.save
      render json: {stuff: 'input'}
    else
      render json: {error: 'Something went wrong'}
    end
  end

  def add_friend
    @params = params[:friend]
    @id = params[:game]
    @game = Game.find_by(id: @id)
    @user = User.find_by(name: @params)
    friend_exists = current_user.friends.find do |f|
      f.id == @user.id
    end
    if friend_exists
      Player.create(game_id: @game.id, user_id: friend_exists.id)
      render json: {message: "{friend_exists.name} was added to the game!"}
    else
      Friendship.create(user_id: current_user.id, friend_id: @user.id)
      Player.create(game_id: @game.id, user_id: @user.id)
      render json: {message: '{friend_exists.name} was added as a friend and to the game!'}
    end
  end
end
