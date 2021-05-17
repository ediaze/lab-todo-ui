export class TodoItemDto {
  id?: number;
  name: string = '';
  isComplete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
