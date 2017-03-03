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

  def find
    @friend = User.find_by(name: params[:user][:name])
    if !@friend.nil?
      render json: {friend: @friend}
    else
      render json: {error: 'Could not find your friend'}
    end
  end

  def friend
    @friend = User.find_by(id: params[:user][:id])
    @friendship = Friendship.new(user_id: current_user.id, friend_id: @friend.id)
    if !@friend.nil? && @friendship.save
      render json: {friend: @friend}
    else
      render json: {error: 'something went wrong'}
    end
  end

  def delete
    @user = User.find_by(id: params[:id])
    friendships = current_user.friendships
    @remaining_friendships = friendships.map do |friendship|
      if friendship.friend_id == @user.id
        friendship.delete
      end
    end
    if @remaining_friendships.length == 0
      @remaining_friendships = [{name: "search for your friends!"}]
    end
    render json: {friends: @remaining_friendships}
  end

  private

  def permit_params_new
    params.require(:newUser).permit(:name, :password)
  end

  def permit_params_login
    params.require(:user).permit(:name, :password)
  end

end
