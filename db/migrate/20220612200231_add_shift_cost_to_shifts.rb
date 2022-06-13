class AddShiftCostToShifts < ActiveRecord::Migration[7.0]
  def change
    add_column :shifts, :shift_cost, :integer
  end
end
