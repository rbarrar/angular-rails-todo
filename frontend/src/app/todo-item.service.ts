import { Injectable } from '@angular/core';
import { TodoItemComponent } from './todo-item/';
import { Headers, Http } from '@angular/http';
import { TodoItem } from './models/todo_item';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoItemsService {
  private todo_itemsUrl = 'api/todo_items';
  constructor(private http: Http) { };

  getTodoItems(): Promise<TodoItem[]> {
    return this.http.get(this.todo_itemsUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getTodoItem(id: number) {
    return this.getTodoItems()
      .then(todo_items => todo_items.filter(todo_item => todo_item.id === id)[0]);
  }



  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
