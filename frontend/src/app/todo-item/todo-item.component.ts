import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from '../todo-item.service';
import { RouteParams } from '@angular/router-deprecated';
import { TodoItem } from '../models/todo_item';
import { Router } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todo_item: TodoItem;
  error: any;

  constructor (
    private todo_itemService: TodoItemsService,
    private routeParams: RouteParams,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.todo_itemService.getTodoItem(id)
      .then(todo_item => this.todo_item = todo_item);
    }
  }
  save() {
    this.todo_itemService
      .save(this.todo_item)
      .then(todo_item => {
        this.router.navigate(['TodoItems']);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }
}
