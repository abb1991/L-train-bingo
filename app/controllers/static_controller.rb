class StaticController < ApplicationController
  def index
    if logged_in?
      @user = current_user
      @games = @user.games
      render component: 'App', props: {user: @user, games: @games}
    else
      @user = User.new
      render component: 'App', props: {user: @user}
    end

  end
end
