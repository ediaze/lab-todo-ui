import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { TodosResolver } from "./shared/guards/todos.resolver";

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
      TodosResolver
    ]
  })
  export class AppRoutingModule {
  }