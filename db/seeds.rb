# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Category.destroy_all
Post.destroy_all

@admin = User.create!(username: 'bossmama', email: 'boss@gmail.com', password: '123456')

puts "#{User.count} user(s) created!"

@category1 = Category.create!(name: 'Sensory & Science')
@category2 = Category.create!(name: 'Movement & Nature')
@category3 = Category.create!(name: 'Arts & Crafts')
@category4 = Category.create!(name: 'Letters & Numbers')

puts "#{Category.count} categories created!"

@post1 = Post.create!(activity: 'Jello Rescue', materials: 'gelatin, container, small animals, bead, pom-poms, food coloring, tools: tweezers, chopsticks, utensils', instructions: 'prepare gelatin using 1 cup less water, add food coloring, pour into container, add objects, let set in fridge overnight', description: 'Great sensory play and fine motor play with no stickiness!', resources:'MotherCould', category: @category1, user: @admin)

@post2 = Post.create!(activity: 'Fizzy Rocks', materials: '1 cup baking soda, 1 tbsp vinegar, eye dropper, container, water, optional: glitter, sequins, pom-poms, food coloring', instructions: 'Mix water and baking soda together. Add in optional items. Squeeze into tight bunches with fist. Dry  overnight on tray. Put rocks into container and use small bowl of vinegar with eye dropper to drip vinegar over the rocks. Watch the Fizzy Rocks fizz!', description: 'Chemistry in motion. May seem simple but delights small kids.', resources: "Sloane's Bookshelf", category: @category1, user: @admin)

@post3 = Post.create!(activity: "What's On My Butt?", materials: 'Whatever objects kids can find.', instructions: 'Parent lays on their belly on the floor or couch. Have children bring random objects over and place them on your back/butt. Parent tries to guess whats on their butt by asking their kids questions or having them describe the item', description: 'For when you need a little break and want to lay down but want to keep the kids minds and bodies moving. Great for laughs and language development too!', category: @category2, user: @admin)

@post4 = Post.create!(activity: 'Puddle Jumping', materials: 'Rain boots, change of clothes, puddles', instructions: 'Go outside. Find puddles and let your kid jump in them and get dirty. Bring a toy boat to show how it floats or throw rocks into it.Explore!', description: 'This is an amazing way to let kids be active and get messy without messing up your house. Also the exploration of the outdoors in various types of weather is benefical too!', category: @category2, user: @admin)

@post4 = Post.create!(activity: 'Fruit Loops Jewelrey', materials: 'Fruit Loops, yarn', instructions: 'Tie one end of the string around a Fruit Loop. Have your child continue to string on Fruit Loops until it reaches desire length', description:'Great fine motor practice and focused work and also tasty!', category: @category3, user: @admin)

@post6 = Post.create!(activity: 'Bubble Art', materials: 'bubble solution, bubble blower, food coloring, muffin tin, paper.', instructions: 'put bubble solution and food coloring in different cups in the muffin tin, allow child to dip bubble blower in different colored bubble solution and then blow bubbles at the paper.', description: 'Great way to use unsual materials to create art! Every kid loves bubbles', category: @category3, user: @admin)

@post7 = Post.create!(activity: 'Counting Goldfish', materials: 'number cards, Goldfish', instructions: 'place the numbers in front of child. Let them place the number of Goldish with the matching number card', description: 'Great way for them to start recognizing numbers represented differently. Materials may get eaten!', category: @category4, user: @admin)

@post8 = Post.create!(activity: 'Firefighter Alphabet', materials: 'expo marker, window, spray bottle of water, firefighter helmet(optional)', instructions: 'Write letters on the window with the expo marker. Call out the letters to you child. Let them put out the fire by spraying the water bottle on the correct letter.', description: 'Fun way to practice letter recognition while also encouraging cleaning!', category: @category4, user: @admin)

puts "#{Post.count} posts created!"



