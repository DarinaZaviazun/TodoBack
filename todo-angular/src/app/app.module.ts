import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {TodosService, ListService} from './services';
import { TodoListsComponent } from './components/todo-lists/todo-lists.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    AuthComponent,
    HeaderComponent,
    TodoListsComponent,
    TodoListComponent,
    CreateListComponent,
    EditListComponent,
    CreateTodoComponent,
    EditTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ListService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
