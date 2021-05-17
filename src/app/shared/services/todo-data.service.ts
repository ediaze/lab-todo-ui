import { Injectable } from '@angular/core';
import { TodoItemDto } from '../dtos/todo-item-dto';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;
  todos: TodoItemDto[] = [];

  constructor() { }

  addTodo(todo: TodoItemDto): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  getTodoById(id: number): TodoItemDto {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  getAllTodos(): TodoItemDto[] {
    return this.todos;
  }

  updateTodoById(id: number,  values: Object = {}): TodoItemDto {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  toggleTodoComplete(todo: TodoItemDto): TodoItemDto {
    let updatedTodo = this.updateTodoById(todo.id, {
      isComplete: !todo.isComplete
    });
    return updatedTodo;
  }
}
