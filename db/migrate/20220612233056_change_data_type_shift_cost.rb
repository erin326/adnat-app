class ChangeDataTypeShiftCost < ActiveRecord::Migration[7.0]
  def up
    change_column :shifts, :shift_cost, :decimal, :precision => 5, :scale => 2, using: 'shift_cost::decimal'
  end

  def down
    change_column :shifts, :shift_cost, :integer
  end
end
