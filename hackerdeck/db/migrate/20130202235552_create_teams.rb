class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.string :description
      t.string :members
      t.string :image_url
      t.integer :event_id

      t.timestamps
    end
  end
end
