import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from './components/todos/todos.component';
import {AuthComponent} from './components/auth/auth.component';
import {TodoListsComponent} from './components/todo-lists/todo-lists.component';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'lists', component: TodoListsComponent},
  {path: 'list/:id', component: TodosComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
