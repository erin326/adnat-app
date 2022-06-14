class Api::UsersController < ApplicationController

    def create 
        user = User.create(user_params) 
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end

    end 

    def show
        
        user = User.find_by(id: session[:user_id])
        if user
            render json: user,  status: :created
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def update 
        user = User.find_by(id: session[:user_id])
        user.skip_password = true
        if user.organization_id == nil
            user.update!(user_params)
            render json: user
        else
            user.update(user_params)
            render json: user
        end 
    end


    private 
    
    def user_params
        params.permit(:user, :organization_id, :organization, :username, :password, :password_confirmation, :email_address)
    end


end