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
var router_deprecated_1 = require('@angular/router-deprecated');
var _1 = require('./todo-items/');
var _2 = require('./todo-item/');
var _3 = require('./home/');
var todo_item_service_1 = require('./todo-item.service');
var AppComponent = (function () {
    function AppComponent(todo_itemsService, router) {
        this.todo_itemsService = todo_itemsService;
        this.router = router;
        this.title = 'To-Dos!';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['Home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [todo_item_service_1.TodoItemsService, router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/todo_items', component: _1.TodoItemsComponent, name: 'TodoItems' },
            { path: '/todo_items/:id', component: _2.TodoItemComponent, name: 'TodoItem' },
            { path: '/home', component: _3.HomeComponent, name: 'Home' }
        ]), 
        __metadata('design:paramtypes', [todo_item_service_1.TodoItemsService, router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map