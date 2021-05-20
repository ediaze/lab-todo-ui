import { Injectable } from '@angular/core';
import { TodoItemDto } from '../dtos/todo-item-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor() { }

  public getAllTodos(): Observable<TodoItemDto[]> {
    return of([
      new TodoItemDto({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createTodo(todo: TodoItemDto): Observable<TodoItemDto> {
    return of(
      new TodoItemDto({id: 1, title: 'Read article', complete: false})
    );
  }

  public getTodoById(todoId: number): Observable<TodoItemDto> {
    return of(
      new TodoItemDto({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTodo(todo: TodoItemDto): Observable<TodoItemDto> {
    return  of(
      new TodoItemDto({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return null;
  }
}
