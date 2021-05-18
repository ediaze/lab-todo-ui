import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItemDto } from 'src/app/shared/dtos/todo-item-dto';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: TodoItemDto[];

  @Output()
  remove: EventEmitter<TodoItemDto> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<TodoItemDto> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onToggleTodoComplete(todo: TodoItemDto): void {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: TodoItemDto): void {
    this.remove.emit(todo);
  }
}
