class User < ApplicationRecord
  has_many :games
  has_many :cards, through: :games
  has_many :players

  has_secure_password
end
