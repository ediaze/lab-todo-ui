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
