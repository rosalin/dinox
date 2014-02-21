class ParceiroMailer < ActionMailer::Base
  
  default :from => "mailer@neemo.com.br"
  
  def new_parceiro(contact)
    @contact = contact
    mail(:to => Site::MAIL_TO, :subject => "Novo Cadastro de Parceria Comercial - Site", :from => "mailer@neemo.com.br")
    #mail(:to => "sandro_presidente@yahoo.com.br", :subject => "Novo formulario de contato", :from => "comercial@neemo.com.br")
  end
  
end