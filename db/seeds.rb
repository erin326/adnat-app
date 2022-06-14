# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Organization.create(name: "Bob's Burgers", hourly_rate: 10)

Organization.create(name: "Moe's Tavern", hourly_rate: 12)
sallys = Organization.create(name: "Sally's Sandwiches", hourly_rate: 15)

#  kelly = User.create(username: 'Kelly Verk', email_address: 'kelly@example.com', password: 'marvin123')
#  sallys.users << kelly

#  kshift = Shift.create(start: '2022-06-12 11:18:29 -0700', finish: "2022-06-12 12:30:20 -0600", break_length: 30 )
#  kshift2 =  Shift.create(start: '2022-06-08 13:34:40 -0700', finish: "2022-06-08 16:30:20 -0600", break_length: 30 )

#  kshift3 =  Shift.create(start: '2022-06-08 21:49:40 -0700', finish: "2022-06-08 23:49:40 -0600", break_length: 30 ) 

#  kelly.shifts << kshift
#  kelly.shifts << kshift2
#  kelly.shifts << kshift3