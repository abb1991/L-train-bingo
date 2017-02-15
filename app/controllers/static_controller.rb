class StaticController < ApplicationController
  def index
    if logged_in?
      @user = current_user
      @games = @user.games
      @cards = {}
      @games.each do |game|
        e = {game.id => game.cards}
        @cards = @cards.merge(e)
      end
      render component: 'App', props: {user: @user, games: @games, cards: @cards}
    else
      @user = User.new
      render component: 'App', props: {user: @user}
    end
  end
end
