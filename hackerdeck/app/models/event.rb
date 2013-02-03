class Event < ActiveRecord::Base
  attr_accessible :name, :current_team, :status, :time

  has_many :teams
end
