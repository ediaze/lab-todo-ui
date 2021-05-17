import { TestBed } from '@angular/core/testing';
import { TodoItemDto } from '../dtos/todo-item-dto';

import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id', () => {
      let todo1: TodoItemDto = {name: 'Hello 1', isComplete: false};
      let todo2: TodoItemDto = {name: 'Hello 2', isComplete: true};
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    });
  });

  describe('#deleteTodoById(id)', () => {
    it('should remove todo with the corresponding id', () => {
      let todo1: TodoItemDto = {name: 'Hello 1', isComplete: false};
      let todo2: TodoItemDto = {name: 'Hello 2', isComplete: true};
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    });

    it('should not removing anything if todo with corresponding id is not found', () => {
      let todo1: TodoItemDto = {name: 'Hello 1', isComplete: false};
      let todo2: TodoItemDto = {name: 'Hello 2', isComplete: true};
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    });
  });

  describe('#getAllTodos()', () => {
    it('should return an empty array by default', () => {
      expect(service.getAllTodos()).toEqual([]);
    });

    it('should return all todos', () => {
      let todo1: TodoItemDto = {name: 'Hello 1', isComplete: false};
      let todo2: TodoItemDto = {name: 'Hello 2', isComplete: true};
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    });
  });

  describe('#updateTodoById(id, values)', () => {
    it('should return todo with the corresponding id and updated data', () => {
      let todo: TodoItemDto = {name: 'Hello 1', isComplete: false};
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(1, {name: 'new title'});
      expect(updatedTodo.name).toEqual('new title');
    });

    it('should return null if todo is not found', () => {
      let todo: TodoItemDto = {name: 'Hello 1', isComplete: false};
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(2, {name: 'new title'});
      expect(updatedTodo).toEqual(null);
    });
  });

  describe('#toggleTodoComplete(todo)', () => {
    it('should return null if todo is not found', () => {
      let todo: TodoItemDto = {name: 'Hello 1', isComplete: false};
      service.addTodo(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.isComplete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.isComplete).toEqual(false);
    });
  });
});
