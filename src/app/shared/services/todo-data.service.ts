import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItemDto } from '../dtos/todo-item-dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private api: ApiService) { }

  addTodo(todo: TodoItemDto): Observable<TodoItemDto> {
    return this.api.createTodo(todo);
  }

  getTodoById(todoId: number): Observable<TodoItemDto> {
    return this.api.getTodoById(todoId);
  }

  deleteTodoById(todoId: number): Observable<TodoItemDto> {
    return this.api.deleteTodoById(todoId);
  }

  getAllTodos(): Observable<TodoItemDto[]> {
    return this.api.getAllTodos();
  }

  updateTodo(todo: TodoItemDto): Observable<TodoItemDto> {
    return this.api.updateTodo(todo);
  }

  toggleTodoComplete(todo: TodoItemDto): Observable<TodoItemDto> {
    todo.isComplete = !todo.isComplete;
    return this.api.updateTodo(todo);
  }
}
