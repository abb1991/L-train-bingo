class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.belongs_to :creator
      t.string :title

      t.timestamps
    end
  end
end
