require 'rails_helper'

RSpec.describe Api::TodoItemsController, :type => :controller do
  describe 'POST #create' do
    context 'with valid attributes' do
      it 'creates the todo_item' do
        expect(TodoItem.count).to eq(0)
        post :create, todo_item: {title: 'do something', description: 'working'}
        expect(TodoItem.count).to eq(1)
      end
    end
    context 'with invalid attributes' do
      it 'does not create the todo_item' do
        post :create, todo_item: {title: nil}
        expect(TodoItem.count).to eq(0)
      end
    end
  end
  describe 'GET #index' do
    context 'with todo_items present' do
      it 'shows the todo_items' do
        item1 = TodoItem.create(title: 'item', description: 'test')
        item2 = TodoItem.create(title: 'second', description: 'test')
        get :index
        expect(response.body).to eq([item1, item2].to_json)
      end
    end
  end
  describe 'GET #show/:id' do
    context 'when you have selected a todo_item' do
      it 'shows a todo_item' do
        item1 = TodoItem.create(title: 'item', description: 'test')
        get :show, id: item1.id
        expect(response.body).to eq(item1.to_json)
      end
    end
  end
  describe "PUT #update/:id" do
    context 'when you are updating a todo_item with valid attributes' do
      it 'updates a todo_item' do
        item1 = TodoItem.create(title: 'item', description: 'test')
        put :update, id: item1.id, todo_item: { title: 'new title', description: 'new content' }
        item1.reload
        expect(item1.title).to eq('new title')
        expect(item1.description).to eq('new content')
      end
    end
    context 'when you are updating a todo_item with invalid attributes' do
      it 'does not update the todo_item' do
        item1 = TodoItem.create(title: 'item', description: 'test')
        put :update, id: item1.id, todo_item: { title: nil }
        item1.reload
        expect(item1.title).to eq('item')
      end
    end
  end
  describe "DELETE #destroy/:id" do
    context 'when you are deleted a todo_item' do
      it 'deletes a todo_item' do
        item1 = TodoItem.create(title: 'item', description: 'test')
        expect(TodoItem.count).to eq(1)
        delete :destroy, id: item1.id
        expect(TodoItem.count).to eq(0)
      end
    end
  end
end
