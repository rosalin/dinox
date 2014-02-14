class AddDadosToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :cidade, :string
    add_column :contacts, :cep, :string
    add_column :contacts, :estado, :string
  end
end
