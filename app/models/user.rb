class User < ApplicationRecord

    attr_accessor :skip_password

    belongs_to :organization, optional: true
    has_many :shifts

    validates :username, presence: true, uniqueness: true
    has_secure_password
    PASSWORD_REQUIREMENTS = /\A (?=.{6,})/x
    validates :password, format: PASSWORD_REQUIREMENTS, unless: :skip_password

    
    
end
