class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :description
      t.boolean :complete
      t.belongs_to :game

      t.timestamps
    end
  end
end
