class Api::OrganizationsController < ApplicationController


    def index
        organizations = Organization.all
        render json: organizations
    end

    def create 
        user = User.find_by(id: session[:user_id])

        if user    
            organization = Organization.create(organization_params)
            
            if organization.valid?
                organization.users << user
                render json: organization, include: :users, status: :created
            else
                render json: {errors: organization.errors.full_messages}, status: :unprocessable_entity
            end
        end
    
    end

    def update
        organization = Organization.find(params[:id])
        organization.update(organization_params)
        render json: organization
    end

    def show
        user = User.find_by(id: session[:user_id])
            if user
            organization = user.organization
            render json: organization
            end
    end

    private 

    def organization_params
        params.permit(:name, :hourly_rate)
    end

end