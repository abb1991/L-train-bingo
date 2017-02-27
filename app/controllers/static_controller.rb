class StaticController < ApplicationController
  def index
    if logged_in?
      @user = current_user
      @friends = @user.friends
      @games = @user.games
      @cards = {}
      @games.each do |game|
        e = {game.id => game.cards}
        @cards = @cards.merge(e)
      end
      render component: 'App', props: {user: @user, games: @games, cards: @cards, friends: @friends, logged_in: true}
    else
      @user = User.new
      render component: 'App', props: {user: @user, loggedIn: false}
    end
  end
end
