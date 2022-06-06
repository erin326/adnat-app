class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.integer :organization_id
      t.string :username
      t.string :email_address
      t.string :password_digest
      
      t.timestamps
    end
  end
end
