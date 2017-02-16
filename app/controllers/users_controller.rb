class UsersController < ApplicationController

  def new
    @user = User.new(permit_params_new)
    if @user.save
      session[:user_id] = @user.id
      log_in = logged_in?
      render json: {user: @user, loggedIn: log_in}
    else
      render json: {error: "Something went wrong."}
    end
  end

  def login
    @user = User.find_by(name: params[:user][:name])
    session[:user_id] = @user.id
    @user = @user.authenticate(params[:user][:password])
    log_in = logged_in?
    if log_in
      render json: {user: @user, loggedIn: log_in}
    else
      render json: {error: 'Wrong username or password'}
    end
  end

  def logout
    session.delete
    @user = User.new
    render component: 'App', props: {user: @user, loggedIn: false}
  end

  private

  def permit_params_new
    params.require(:newUser).permit(:name, :password)
  end

  def permit_params_login
    params.require(:user).permit(:name, :password)
  end

end
