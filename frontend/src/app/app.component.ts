import { Component, OnInit } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { TodoItemsComponent } from './todo-items/';
import { TodoItemComponent } from './todo-item/';
import { HomeComponent } from './home/';
import { TodoItemsService } from './todo-item.service'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [TodoItemsService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/todo_items', component: TodoItemsComponent, name: 'TodoItems'},
  {path: '/todo_items/:id', component: TodoItemComponent, name: 'TodoItem'},
  {path: '/home', component: HomeComponent, name: 'Home'}
])
export class AppComponent implements OnInit {
  title = 'To-Do APP!';

  constructor(
   private todo_itemsService: TodoItemsService,
   private router: Router
 ) { }

 ngOnInit(){
   this.router.navigate(['Home']);
 }
}
