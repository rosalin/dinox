class AddDadosParceiroToContacts < ActiveRecord::Migration
  def change
    add_column :site_contacts, :rua, :string
    add_column :site_contacts, :numero, :string
    add_column :site_contacts, :bairro, :string
    add_column :site_contacts, :cpf_cnpj, :string
  end
end
