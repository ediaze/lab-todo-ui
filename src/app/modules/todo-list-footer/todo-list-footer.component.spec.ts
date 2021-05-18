import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemDto } from 'src/app/shared/dtos/todo-item-dto';

import { TodoListFooterComponent } from './todo-list-footer.component';

describe('TodoListFooterComponent', () => {
  let component: TodoListFooterComponent;
  let fixture: ComponentFixture<TodoListFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListFooterComponent);
    component = fixture.componentInstance;
    component.todos = [
      new TodoItemDto({ id: 1, name: 'Test', isComplete: false })
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
