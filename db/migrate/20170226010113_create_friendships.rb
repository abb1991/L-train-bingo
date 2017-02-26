class CreateFriendships < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.belongs_to :user
      t.integer :friend_id

      t.timestamps
    end
  end
end
