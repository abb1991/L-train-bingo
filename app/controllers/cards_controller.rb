class CardsController < ApplicationController

  def new
    squares =  params[:card][:newCard].to_unsafe_h
    new_game = Game.create(creator_id: current_user.id, title: params[:card][:title])
    squares.each do |id, desc|
      card = Card.new(game_id: new_game.id, description: desc)
      if !card.save
        render json: {error: 'Something went wrong'}
      end
    end
    @games = current_user.games
    @cards = {}
    @games.each do |game|
      e = {game.id => game.cards}
      @cards = @cards.merge(e)
    end
    render json: {cards: @cards, games: @games}
  end

  def update
    card = Card.find_by(id: params[:id])
    if card
      card.complete = permit_params_update
      card.save
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
end
