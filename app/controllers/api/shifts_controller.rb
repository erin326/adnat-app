class Api::ShiftsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
     
        shifts = user.organization.shifts
        
        ordered_shifts = shifts.order(:start)

        render json: ordered_shifts
    end

    def create
        user = User.find_by(id: session[:user_id])

        if user 
            shift = Shift.create(shift_params)
            user.shifts << shift
            if shift.valid?
                render json: shift, status: :created
            else
                render json: {errors: shift.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
        
    end

    private

    def shift_params
        params.permit(:start, :finish, :break_length, :hours_worked, :shift_cost, :user_id, :organization_id)
    end


end
