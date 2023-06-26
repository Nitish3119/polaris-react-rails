class CreatePolRes < ActiveRecord::Migration[7.0]
  def change
    create_table :pol_res do |t|
      t.string :name
      t.string :key
      t.integer :value

      t.timestamps
    end
  end
end
