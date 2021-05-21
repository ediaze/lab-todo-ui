import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './modules/todo-list-header/todo-list-header.component';
import { TodoListComponent } from './modules/todo-list/todo-list.component';
import { TodoListItemComponent } from './modules/todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './modules/todo-list-footer/todo-list-footer.component';
import { TodoDataService } from './shared/services/todo-data.service';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './shared/services/api.service';
import { TodosComponent } from './modules/todos/todos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodosComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
