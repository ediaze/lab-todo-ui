import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { TodosComponent } from "./modules/todos/todos.component";
import { CanActivateTodosGuard } from "./shared/guards/can-activate-todos.guard";
import { TodosResolver } from "./shared/guards/todos.resolver";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'todos',
        component: TodosComponent,
        canActivate: [
            CanActivateTodosGuard
        ],
        resolve: {
            message: TodosResolver
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];  