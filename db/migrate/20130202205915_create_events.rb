class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.integer :current_team
      t.string :status
      t.integer :time

      t.timestamps
    end
  end
end
