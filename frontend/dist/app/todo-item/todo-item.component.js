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
var router_deprecated_2 = require('@angular/router-deprecated');
var TodoItemComponent = (function () {
    function TodoItemComponent(todo_itemService, routeParams, router) {
        this.todo_itemService = todo_itemService;
        this.routeParams = routeParams;
        this.router = router;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.todo_itemService.getTodoItem(id)
                .then(function (todo_item) { return _this.todo_item = todo_item; });
        }
    };
    TodoItemComponent.prototype.save = function () {
        var _this = this;
        this.todo_itemService
            .save(this.todo_item)
            .then(function (todo_item) {
            _this.router.navigate(['TodoItems']);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    TodoItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-todo-item',
            templateUrl: 'todo-item.component.html',
            styleUrls: ['todo-item.component.css']
        }), 
        __metadata('design:paramtypes', [todo_item_service_1.TodoItemsService, router_deprecated_1.RouteParams, router_deprecated_2.Router])
    ], TodoItemComponent);
    return TodoItemComponent;
}());
exports.TodoItemComponent = TodoItemComponent;
//# sourceMappingURL=todo-item.component.js.map