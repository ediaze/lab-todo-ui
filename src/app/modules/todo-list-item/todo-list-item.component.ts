import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItemDto } from 'src/app/shared/dtos/todo-item-dto';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: TodoItemDto;

  @Output()
  remove: EventEmitter<TodoItemDto> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<TodoItemDto> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTodoComplete(todo: TodoItemDto) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: TodoItemDto) {
    this.remove.emit(todo);
  }

}
