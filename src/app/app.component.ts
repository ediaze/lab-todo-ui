import { Component, OnInit } from '@angular/core';
import { TodoItemDto } from './shared/dtos/todo-item-dto';
import { TodoDataService } from './shared/services/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  todos: TodoItemDto[] = [];
  
  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit(): void {
    this.todoDataService.getAllTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  onAddTodo(todo: TodoItemDto) {
    this.todoDataService.addTodo(todo).subscribe((data) => {
      this.todos = this.todos.concat(data);
    });
  }

  onToggleTodoComplete(todo: TodoItemDto) {
    this.todoDataService.toggleTodoComplete(todo).subscribe((data) => {
      todo = data;
    });
  }

  onRemoveTodo(todo: TodoItemDto) {
    this.todoDataService.deleteTodoById(todo.id).subscribe((_) => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }
}
