import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { TodosComponent } from "./modules/todos/todos.component";
import { TodosResolver } from "./shared/guards/todos.resolver";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component: TodosComponent,
        resolve: {
            message: TodosResolver
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];  