class Team < ActiveRecord::Base
  attr_accessible :description, :image_url, :members, :name, :event_id

  belongs_to :event
end
