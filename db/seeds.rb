5.times do
  User.create(name: Faker::Name.name, password: 'test')
end

users = User.all
users.each do |user|
  Game.create(user_id: user.id, title: Faker::Lorem.word )
end

games = Game.all
games.each do |game|
  10.times do
    Card.create(game_id: game.id, description: Faker::Lorem.sentence)
  end
end
