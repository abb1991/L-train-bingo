class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :creator_id
      t.string :title, :default => 'title'

      t.timestamps
    end
  end
end
