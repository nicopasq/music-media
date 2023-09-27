# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
    include ActionController::Cookies

    def home
      render json: {page: home}
    end
  end