class AddDadosToContacts < ActiveRecord::Migration
  def change
    add_column :site_contacts, :cidade, :string
    add_column :site_contacts, :cep, :string
    add_column :site_contacts, :estado, :string
  end
end
