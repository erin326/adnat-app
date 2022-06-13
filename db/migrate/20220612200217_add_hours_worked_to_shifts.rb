class AddHoursWorkedToShifts < ActiveRecord::Migration[7.0]
  def change
    add_column :shifts, :hours_worked, :integer
  end
end
