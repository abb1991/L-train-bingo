class UsersController < ApplicationController
  def new
    @user = User.new(permit_params)
    if @user.save
      session[:user_id] = @user.id
      log_in = logged_in?
      render json: {user: @user, logged_in: log_in}
    else
      render json: {error: "Something went wrong."}
    end
  end

  private

  def permit_params
    params.require(:newUser).permit(:name, :password)
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

end
