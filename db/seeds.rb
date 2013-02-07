# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Event.delete_all
Event.create(:name => "Developerweek")
Event.create(:name => "hackMIT")
Event.create(:name => "The Business of API Hackathon")
Event.create(:name => "Cal Poly Hack")
Event.create(:name => "Aaron Swartz Memorial Hackathon")
Event.create(:name => "HackWeek at Princeton")

Team.delete_all
Team.create(:name => "JobLoop", :description => "JobLoop helps organize all phases of a candidate?s job search process. Reduce the stress of the job search process by tracking everything in one place and monitoring your progress as you go. We plan on using Meteor.js, D&B?s API to pull company informatio", :members =>  "ChickenFur", :image_url => "https://s3.amazonaws.com/hackerleague/hacks/screenshots/510da2dba0f5f9e654000180/original.png?1359848423", :event_id =>1)
Team.create(:name => "Swagger Hacker - Foster Tweets", :description => "Foster Tweets finds relevant content and writes tweets for businesses. You can select key words that relate to your company, then Foster Tweets finds infographics, articles and other relevant content, writes your tweets, and sends them to your inbox so th", :members => "jtent, swaggerhacker, ameliones, vector", :image_url => "https://s3.amazonaws.com/hackerleague/hacks/screenshots/50fdbc687191225abf00000d/original.png?1359835452", :event_id => 1)
Team.create(:name => "Callinize", :description => "The problem is that modern cell phones still only deliver the same incoming/outgoing calling details that we have been able to see since callerid was invented 43 years ago. The only difference is that with smartphones you can see a picture which mostly de", :members => "askhogan, aaronrelph, blak3r", :image_url => "https://s3.amazonaws.com/hackerleague/hacks/screenshots/510d51a1a0f5f9e6540000ff/original.png?1359827372", :event_id => 1)
Team.create(:name => "Catering based name here", :description => "We are going to AirBnb Catering nationwide", :members => "jayz", :image_url => "", :event_id => 1)
Team.create(:name => "Graphe.me", :description => "A code-like syntax highlighter for the English language.", :members => "LexisNexis", :image_url => "https://s3.amazonaws.com/hackerleague/hacks/screenshots/510d6aa857c68d7f99000150/original.png?1359833777", :event_id => 1)
Team.create(:name => "Team2", :description => "", :members => "", :image_url => "https://www.dotcloud.com/static/img/logo.png", :event_id => 2)
