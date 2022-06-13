class ChangeDataTypeHoursWorked < ActiveRecord::Migration[7.0]
  def up
    change_column :shifts, :hours_worked, :decimal, :precision => 5, :scale => 2, using: 'hours_worked::decimal'
  end

  def down
    change_column :shifts, :hours_worked, :integer
  end

end
