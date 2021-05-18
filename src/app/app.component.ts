import { Component } from '@angular/core';
import { TodoItemDto } from './shared/dtos/todo-item-dto';
import { TodoDataService } from './shared/services/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  
  constructor(private todoDataService: TodoDataService) {
  }

  onAddTodo(todo: TodoItemDto) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo: TodoItemDto) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo: TodoItemDto) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(): TodoItemDto[] {
    return this.todoDataService.getAllTodos();
  }
}
