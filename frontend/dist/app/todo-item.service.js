"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var TodoItemsService = (function () {
    function TodoItemsService(http) {
        this.http = http;
        this.todo_itemsUrl = 'api/todo_items';
    }
    ;
    TodoItemsService.prototype.getTodoItems = function () {
        return this.http.get(this.todo_itemsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TodoItemsService.prototype.getTodoItem = function (id) {
        return this.getTodoItems()
            .then(function (todo_items) { return todo_items.filter(function (todo_item) { return todo_item.id === id; })[0]; });
    };
    TodoItemsService.prototype.save = function (todo_item) {
        if (todo_item.id) {
            return this.put(todo_item);
        }
        else {
            return this.post(todo_item);
        }
    };
    TodoItemsService.prototype.delete = function (todo_item) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.todo_itemsUrl + "/" + todo_item.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    // Add new Todo
    TodoItemsService.prototype.post = function (todo_item) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.todo_itemsUrl, JSON.stringify(todo_item), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Update existing Todo
    TodoItemsService.prototype.put = function (todo_item) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.todo_itemsUrl + "/" + todo_item.id;
        return this.http
            .put(url, JSON.stringify(todo_item), { headers: headers })
            .toPromise()
            .then(function () { return todo_item; })
            .catch(this.handleError);
    };
    TodoItemsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TodoItemsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoItemsService);
    return TodoItemsService;
}());
exports.TodoItemsService = TodoItemsService;
//# sourceMappingURL=todo-item.service.js.map