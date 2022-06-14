class ShiftSerializer < ActiveModel::Serializer
  attributes :id, :start, :finish, :break_length, :hours_worked, :shift_cost, :organization_id

  belongs_to :user
  belongs_to :organization
end
