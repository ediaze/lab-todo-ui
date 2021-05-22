import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { LoginDto } from '../dtos/login-dto';
import { TodoItemDto } from '../dtos/todo-item-dto';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.apiUrl;
  endPoint = this.baseUrl + '/todoItems';
  // endPoint = environment.apiUrl + '/api/todoItems';

  constructor(
    private http: HttpClient,
    private session: SessionService) {
  }

  private getRequestOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.session.accessToken
      })
    };
    return httpOptions;
  }

  public signIn(username: string, password: string) {
    return this.http.post<LoginDto>(this.baseUrl + '/sign-in', {
        username,
        password
      })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // API: GET /todos
  public getAllTodos(): Observable<TodoItemDto[]> {
    const options = this.getRequestOptions();
    return this.http.get<TodoItemDto[]>(this.endPoint, options)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<TodoItemDto> {
    const options = this.getRequestOptions();
    return this.http.get<TodoItemDto>(`${this.endPoint}/${todoId}`, options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // API: POST /todos
  public createTodo(todo: TodoItemDto) {
    const options = this.getRequestOptions();
    return this.http.post<TodoItemDto>(this.endPoint, JSON.stringify(todo), options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // API: PUT /todos/:id
  public updateTodo(todo: TodoItemDto) {
    const options = this.getRequestOptions();
    return this.http.put<TodoItemDto>(`${this.endPoint}/${todo.id}`, JSON.stringify(todo), options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    const options = this.getRequestOptions();
    return this.http.delete<TodoItemDto>(`${this.endPoint}/${todoId}`, options)
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
