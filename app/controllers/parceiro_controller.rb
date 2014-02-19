#encoding: utf-8
class ParceiroController < ApplicationController
  
  respond_to :html, :js
    
  before_filter :initialize_contact  
  
  def initialize_contact
    @site_contact = Site::Contact.new
  end
 
  def create_parceiro
    begin
      @contact = Contact.new(params[:site_contact])
      if ParceiroMailer.new_contact(@contact).deliver
        flash[:notice] = 'Obrigado pelo seu contato!'
        redirect_to new_parceiro_path
      else
        redirect_to new_parceiro_path
      end
    rescue ScriptError
      flash[:error] = 'Desculpe-nos, não recebemos seu cadastro!'
    end
  end
  
end
