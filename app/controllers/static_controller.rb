class StaticController < ApplicationController
  def index
    if logged_in?
      @user = current_user
      render component: 'App', props: {user: @user}
    else
      @user = User.new
      render component: 'App', props: {user: @user}
    end

  end
end
