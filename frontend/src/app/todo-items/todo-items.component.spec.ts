/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TodoItemsComponent } from './todo-items.component';

describe('Component: TodoItems', () => {
  it('should create an instance', () => {
    let component = new TodoItemsComponent();
    expect(component).toBeTruthy();
  });
});
