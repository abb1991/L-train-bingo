class CardsController < ApplicationController

  def new
    binding.pry
    squares = params[:newCard][:card]
  end

  def update
    card = Card.find_by(id: params[:id])
    if card
      card.complete = permit_params
    else
      render json: {error: 'Something went wrong'}
    end
  end

  private

  def permit_params
    params.require(:updateCard).permit(:complete)
    # params.require(:newCard).permit(:card)
  end
end
