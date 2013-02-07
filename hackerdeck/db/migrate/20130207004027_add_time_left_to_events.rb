class AddTimeLeftToEvents < ActiveRecord::Migration
  def change
    add_column :events, :timeleft, :integer
  end
end
