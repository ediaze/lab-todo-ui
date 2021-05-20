import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { TodoItemDto } from '../dtos/todo-item-dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // endPoint = environment.apiUrl + '/todoItems';
  endPoint = environment.apiUrl + '/api/todoItems';

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // API: GET /todos
  public getAllTodos(): Observable<TodoItemDto[]> {
    return this.http.get<TodoItemDto[]>(this.endPoint)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<TodoItemDto> {
    return this.http.get<TodoItemDto>(`${this.endPoint}/${todoId}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // API: POST /todos
  public createTodo(todo: TodoItemDto) {
    return this.http.post<TodoItemDto>(this.endPoint, JSON.stringify(todo), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // API: PUT /todos/:id
  public updateTodo(todo: TodoItemDto) {
    return this.http.put<TodoItemDto>(`${this.endPoint}/${todo.id}`, JSON.stringify(todo), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    return this.http.delete<TodoItemDto>(`${this.endPoint}/${todoId}`, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError(failure: HttpErrorResponse) {
    let message = '';
    if (failure.status === 0) {
      message = `A client-side or network error occurred: ${failure.error}`;
    } else {
      if(failure.error instanceof ErrorEvent) {
        message = failure.error.message;
      } else {
        let details = failure.message ? failure.message : failure.error;
        message = `Server side error. Error Code: ${failure.status}, Message: ${details}`;
      }
    }
    console.error(message);
    return throwError(message);
  }
}
