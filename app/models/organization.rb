class Organization < ApplicationRecord
    has_many :users
    validates :name, presence: true
    validates :hourly_rate, presence: true


   
end
