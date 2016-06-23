import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { TodoItemsService } from './app/todo-item.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [TodoItemsService, HTTP_PROVIDERS]);
