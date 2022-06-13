class AddForeignKeyToShifts < ActiveRecord::Migration[7.0]
  def change
    add_column :shifts, :organization_id, :integer
  end
end
