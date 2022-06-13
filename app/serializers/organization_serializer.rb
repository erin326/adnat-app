class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :hourly_rate

  has_many :users
  # has_many :shifts
end
