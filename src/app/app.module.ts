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

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
