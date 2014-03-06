class ApplicationController < ActionController::Base
  
  include Site
  
  protect_from_forgery

end
