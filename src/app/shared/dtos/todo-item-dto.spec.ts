import { TodoItemDto } from './todo-item-dto';

describe('TodoItemDto', () => {
  it('should create an instance', () => {
    expect(new TodoItemDto()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let todo: TodoItemDto = {
      name: 'hello',
      isComplete: true
    };
    expect(todo.name).toEqual('hello');
    expect(todo.isComplete).toEqual(true);
  });
});
