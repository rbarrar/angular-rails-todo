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
var todo_item_service_1 = require('../todo-item.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var todo_item_1 = require('../models/todo_item');
var TodoItemsComponent = (function () {
    function TodoItemsComponent(todo_itemService, router) {
        this.todo_itemService = todo_itemService;
        this.router = router;
        this.todo_item = new todo_item_1.TodoItem();
    }
    TodoItemsComponent.prototype.ngOnInit = function () {
        this.getTodoItems();
    };
    TodoItemsComponent.prototype.getTodoItems = function () {
        var _this = this;
        this.todo_itemService.getTodoItems().then(function (todo_items) { return _this.todo_items = todo_items; });
    };
    TodoItemsComponent.prototype.gotoDetail = function (todo_item) {
        var link = ['TodoItem', { id: todo_item.id }];
        this.router.navigate(link);
    };
    TodoItemsComponent.prototype.addTodoItem = function () {
        var _this = this;
        this.todo_itemService
            .save(this.todo_item)
            .then(function (todo_item) {
            _this.todo_item = new todo_item_1.TodoItem();
            _this.getTodoItems();
        })
            .catch(function (error) { return _this.error = error; });
    };
    TodoItemsComponent.prototype.delete = function (todo_item, event) {
        var _this = this;
        event.stopPropagation();
        this.todo_itemService
            .delete(todo_item)
            .then(function (res) {
            _this.todo_items = _this.todo_items.filter(function (td) { return td !== todo_item; });
        })
            .catch(function (error) { return _this.error = error; });
    };
    TodoItemsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-todo-items',
            templateUrl: 'todo-items.component.html',
            styleUrls: ['todo-items.component.css']
        }), 
        __metadata('design:paramtypes', [todo_item_service_1.TodoItemsService, router_deprecated_1.Router])
    ], TodoItemsComponent);
    return TodoItemsComponent;
}());
exports.TodoItemsComponent = TodoItemsComponent;
//# sourceMappingURL=todo-items.component.js.map