import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItemDto } from 'src/app/shared/dtos/todo-item-dto';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: TodoItemDto = new TodoItemDto();

  @Output()
  add: EventEmitter<TodoItemDto> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(): void {
    this.add.emit(this.newTodo);
    this.newTodo = new TodoItemDto();
  }
}
