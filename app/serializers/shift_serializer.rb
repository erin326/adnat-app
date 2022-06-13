class ShiftSerializer < ActiveModel::Serializer
  attributes :id, :start, :finish, :break_length, :hours_worked, :shift_cost

  belongs_to :user
end
