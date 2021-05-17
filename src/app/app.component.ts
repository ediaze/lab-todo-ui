import { Component } from '@angular/core';
import { TodoItemDto } from './shared/dtos/todo-item-dto';
import { TodoDataService } from './shared/services/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'Todos';
  newTodo: TodoItemDto = new TodoItemDto();
  
  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new TodoItemDto();
  }

  toggleTodoComplete(todo: TodoItemDto) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo: TodoItemDto) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(): TodoItemDto[] {
    return this.todoDataService.getAllTodos();
  }
}
