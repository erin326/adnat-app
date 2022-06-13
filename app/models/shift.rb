class Shift < ApplicationRecord
    belongs_to :user
    belongs_to :organization
    validates :start, presence: true
    validates :finish, presence: true

    # def convert_time 
    #     zone = ActiveSupport::TimeZone.new("Central Time (US & Canada)")
    #     # shifts = user.shifts
    #      start = self.start.in_time_zone(zone)
    #      finish = self.finish.in_time_zone(zone)
    #      return [start: start, finish: finish]

    # end


end
