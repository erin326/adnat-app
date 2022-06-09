class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email_address, :organization_id

  belongs_to :organization
  has_many :shifts
end
