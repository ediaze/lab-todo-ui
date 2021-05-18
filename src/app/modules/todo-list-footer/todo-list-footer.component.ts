import { Component, Input, OnInit } from '@angular/core';
import { TodoItemDto } from 'src/app/shared/dtos/todo-item-dto';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {
  @Input()
  todos: TodoItemDto[];

  constructor() { }

  ngOnInit(): void {
  }

}
