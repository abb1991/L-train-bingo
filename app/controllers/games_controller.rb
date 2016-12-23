class GamesController < ApplicationController

  def create
    @game = Game.new(user_id: current_user.id, title: params[title])
    if @game.save
      render json: {stuff: 'input'}
    else
      render json: {error: 'Something went wrong'}
    end
  end

end
