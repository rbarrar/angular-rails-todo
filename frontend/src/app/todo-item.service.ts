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

  save(todo_item: TodoItem): Promise<TodoItem> {
      if (todo_item.id) {
        return this.put(todo_item);
      } else {
        return this.post(todo_item);
      }
    }

    delete(todo_item: TodoItem) {
       let headers = new Headers();
       headers.append('Content-Type', 'application/json');

       let url = `${this.todo_itemsUrl}/${todo_item.id}`;

       return this.http
         .delete(url, headers)
         .toPromise()
         .catch(this.handleError);
     }


    // Add new Todo
  private post(todo_item: TodoItem): Promise<TodoItem> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.todo_itemsUrl, JSON.stringify(todo_item), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  // Update existing Todo
 private put(todo_item: TodoItem) {
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');

   let url = `${this.todo_itemsUrl}/${todo_item.id}`;

   return this.http
     .put(url, JSON.stringify(todo_item), { headers: headers })
     .toPromise()
     .then(() => todo_item)
     .catch(this.handleError);
 }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
