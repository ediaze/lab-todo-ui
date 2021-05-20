import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TodoItemDto } from '../dtos/todo-item-dto';
import { ApiMockService } from './api-mock.service';
import { ApiService } from './api.service';

import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
