import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { TodosComponent } from "./modules/todos/todos.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    },
    {
        path: 'todos',
        component: TodosComponent
    }
];