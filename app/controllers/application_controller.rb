# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  include ActionController::Cookies

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  def login
    render json: {page: "Login page"}
  end
end