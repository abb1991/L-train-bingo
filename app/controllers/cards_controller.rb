class CardsController < ApplicationController

  def new
    squares =  params[:card][:newCard].to_unsafe_h
    game = Game.new(user_id: current_user.id)
    bingo_card = nil
  end

  def update
    card = Card.find_by(id: params[:id])
    if card
      binding.pry
      card.complete = permit_params
    else
      render json: {error: 'Something went wrong'}
    end
  end

  private

  def permit_params_update
    params.require(:updateCard).permit(:complete)
  end

  def permit_params_new
    params.require(:card).permit(:newCard)
  end

  # def current_user
  #   @current_user ||= User.find_by_id(session[:user])
  # end

  # def logged_in?
  #   current_user != nil
  # end
end
