class UsersController < ApplicationController
  def new
    @user = User.new(permit_params)
    if @user.save
      render json: {user: @user}
    else
      render json: {error: "Something went wrong."}
    end

  end

  def permit_params
    params.require(:newUser).permit(:name, :password)
  end
end
