class ShiftSerializer < ActiveModel::Serializer
  attributes :id, :start, :finish, :break_length, :created_at, :updated_at

  belongs_to :user
end
