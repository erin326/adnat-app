class Api::ShiftsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        # zone = ActiveSupport::TimeZone.new("Central Time (US & Canada)")
     
        shifts = user.shifts
        # start = shifts.map do |s| 
        #     s.start.in_time_zone(zone)
        #     s.finish.in_time_zone(zone)
            
        # end
        # start = shifts.all.map{|s| s.convert_time}

      

        render json: shifts
    end

    def create
        user = User.find_by(id: session[:user_id])

        shift = Shift.create(shift_params)
        user.shifts << shift
        render json: shift
        
    end

    private

    def shift_params
        params.permit(:start, :finish, :break_length, :user_id)
    end


end
