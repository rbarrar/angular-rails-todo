import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/';
import { TodoItemsService } from '../todo-item.service';
import { Router } from '@angular/router-deprecated';
import { TodoItem } from '../models/todo_item';

@Component({
  moduleId: module.id,
  selector: 'app-todo-items',
  templateUrl: 'todo-items.component.html',
  styleUrls: ['todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  todo_items: TodoItem[];
  error: any;
  todo_item = new TodoItem();

  constructor(
    private todo_itemService: TodoItemsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTodoItems();
  }

  getTodoItems() {
     this.todo_itemService.getTodoItems().then(todo_items => this.todo_items = todo_items);
   }

  gotoDetail(todo_item: TodoItem) {
     let link = ['TodoItem', { id: todo_item.id }];
     this.router.navigate(link);
   }

  addTodoItem() {
    this.todo_itemService
      .save(this.todo_item)
      .then(todo_item =>{
        this.todo_item = new TodoItem();
        this.getTodoItems();
      })
      .catch(error => this.error = error);
  }

  delete(todo_item: TodoItem, event: any) {
    event.stopPropagation();
    this.todo_itemService
      .delete(todo_item)
      .then(res => {
        this.todo_items = this.todo_items.filter(td => td !== todo_item);
      })
      .catch(error => this.error = error);
  }

}
