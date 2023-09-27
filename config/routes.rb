# config/routes.rb
Rails.application.routes.draw do
  get '/hello', to: 'application#home'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end