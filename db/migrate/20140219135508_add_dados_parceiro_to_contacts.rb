class AddDadosParceiroToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :rua, :string
    add_column :contacts, :numero, :string
    add_column :contacts, :bairro, :string
    add_column :contacts, :cpf_cnpj, :string
  end
end
