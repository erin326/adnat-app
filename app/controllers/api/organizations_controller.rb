class Api::OrganizationsController < ApplicationController


    def index
        organizations = Organization.all
        render json: organizations
    end

    def create 
        user = User.find_by(id: session[:user_id])
        if user    
            organization = Organization.create(organization_params)
            organization.users << user
            if organization.valid?
                render json: organization
            else
                render json: {errors: organization.errors.full_messages}, status: :unprocessable_entity
            end
        end
    end

    private 

    def organization_params
        params.permit(:name, :hourly_rate)
    end
end