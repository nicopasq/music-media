# config/routes.rb
Rails.application.routes.draw do
  get '/login', to: 'application#login'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end