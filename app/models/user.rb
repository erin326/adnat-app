class User < ApplicationRecord
    has_secure_password
    PASSWORD_REQUIREMENTS = /\A (?=.{6,})/x
    validates :password, format: PASSWORD_REQUIREMENTS

    belongs_to :organization, optional: true
    has_many :shifts

    validates :username, presence: true, uniqueness: true
    
    
end
