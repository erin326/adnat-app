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
                    render json: organization,  status: :created
                else
                    render json: {errors: organization.errors.full_messages}, status: :unprocessable_entity
                end
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        organization = Organization.find(params[:id])
        organization.update(organization_params)
        # organization.users << user
        render json: organization
    end

    def join
        user = User.find_by(id: session[:user_id])
        organization = Organization.find(params[:id])
        # user.update(params[:conversation_id])
        # user.organization = organization
        # organization.users << user

        # user.organization_id = organization.id
        # organization.users << user
        permitted = params.permit(:organization_id)
        user.update(permitted)

        render json: organization
    end

    def show
        organization = Organization.find(params[:id])
        render json: organization
        
    end

    def destroy
        organization = Organization.find(params[:id])
        organization.destroy
        head :no_content
    end

    private 

    def organization_params
        params.permit(:name, :hourly_rate)
    end

end