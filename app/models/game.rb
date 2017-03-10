class Game < ApplicationRecord
  has_many :cards
  has_many :players
  has_many :users, through: :players
  belongs_to :creator, class_name: 'User', foreign_key: 'creator_id'
end