class Game < ApplicationRecord
  has_many :cards
  has_many :players
  belongs_to :creator, class_name: 'User', foreign_key: 'user_id'
end
