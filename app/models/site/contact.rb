class Site::Contact < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :name, :email, :telefone, :message, :cidade, :estado, :cep, :rua, :numero, :bairro, :cpf_cnpj
  validates :name, :email, :cidade, :estado,  :presence=>true

  validates :telefone,
    :format => {:with => /^[(]{1}\d{2}[)]{1} {0,1}\d{8}$/}, :presence =>true
end