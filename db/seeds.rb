20.times do
  Blog.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    body: Faker::TvShows::FamilyGuy.quote,
    category: Faker::Book.genre,
    image_url: Faker::Avatar.image,
  )
end

puts "20 rows successfully created"
