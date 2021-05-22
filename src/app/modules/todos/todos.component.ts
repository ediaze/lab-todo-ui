import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoItemDto } from 'src/app/shared/dtos/todo-item-dto';
import { TodoDataService } from 'src/app/shared/services/todo-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoDataService]
})
export class TodosComponent implements OnInit {
  todos: TodoItemDto[] = [];

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolveData) => {
      this.todos = (resolveData && resolveData.message) ? resolveData.message : [];
    });
  }

  onAddTodo(todo: TodoItemDto): void {
    this.todoDataService.addTodo(todo).subscribe((newTodo) => {
      this.todos = this.todos.concat(newTodo);
    });
  }

  onToggleTodoComplete(todo: TodoItemDto): void {
    this.todoDataService.toggleTodoComplete(todo).subscribe((updatedTodo) => {
      todo = updatedTodo;
    });
  }

  onRemoveTodo(todo: TodoItemDto): void {
    this.todoDataService.deleteTodoById(todo.id).subscribe((_) => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

}
