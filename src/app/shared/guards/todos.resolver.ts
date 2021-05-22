import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { TodoItemDto } from "../dtos/todo-item-dto";
import { TodoDataService } from "../services/todo-data.service";

@Injectable()
export class TodosResolver implements Resolve<Observable<TodoItemDto[]>> {
    constructor(
        private todoDataService: TodoDataService
    ) {
    }

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<TodoItemDto[]> {
        return this.todoDataService.getAllTodos();
    }
}