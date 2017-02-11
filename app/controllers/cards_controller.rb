class CardsController < ApplicationController

  def new
    squares = permit_params
    binding.pry
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
    # params.require(:updateCard).permit(:complete)
    params.permit(:newCard).require(:newCard)
  end
end
