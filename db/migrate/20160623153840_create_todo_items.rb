class CreateTodoItems < ActiveRecord::Migration[5.0]
  def change
    create_table :todo_items do |t|
      t.string :title, null: false
      t.text :description 
      t.boolean :complete, default: false
      t.boolean :archived, default: false

      t.timestamps
    end
  end
end
