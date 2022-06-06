class User < ApplicationRecord
    has_secure_password
    belongs_to :organization
    has_many :shifts

    validates :username, presence: true, uniqueness: true
end
