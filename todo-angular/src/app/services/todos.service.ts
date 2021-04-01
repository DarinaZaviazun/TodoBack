import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Todo} from '../interfaces';
import {URL} from '../config';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public entities$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private todos: Todo[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getTodos(listId: string): void {
    this.httpClient.get<Todo[]>(`${URL.list}/${listId}/todos`)
      .subscribe(el => {
        this.todos = el;
        this.entities$.next(this.todos);
      });
  }

  saveNewTodo(todo: FormGroup, ListId: string): void {
    const formData = new FormData();
    formData.append('title', todo.get('title').value);
    formData.append('body', todo.get('body').value);
    formData.append('date', todo.get('finalDate').value);
    this.httpClient.post<string>(`${URL.list}/${ListId}/todo/save`, formData)
      .subscribe(() => this.getTodos(ListId));
  }

  editTodo(ListId: string, TodoId: number, todo: FormGroup): void {
    const formData = new FormData();
    formData.append('title', todo.get('title').value);
    formData.append('body', todo.get('body').value);
    formData.append('date', todo.get('finalDate').value);
    this.httpClient.put<string>(`${URL.list}/${ListId}/todo/${TodoId}/update`, formData)
      .subscribe(() => this.getTodos(ListId));
  }

  deleteTodo(ListId: string, TodoId: number): void {
    this.httpClient.delete<string>(`${URL.list}/${ListId}/todo/${TodoId}/delete`)
      .subscribe(() => this.getTodos(ListId));
  }

  searchTodos(listId: string, word: string): void {
    if (word === '') { return this.getTodos(listId); }
    this.httpClient.post<Todo[]>(`${URL.list}/${listId}/todos/search`, word)
      .subscribe(el => {
        this.todos = el;
        this.entities$.next(this.todos);
      });
  }

  ascendingID(): void{
    this.todos.sort((a, b) => a.id - b.id);
  }

  descendingID(): void{
    this.todos.sort((a, b) => b.id - a.id);
  }

  ascendingDate(): void {
    this.todos.sort((a, b) => Date.parse(a.finalDate) - Date.parse(b.finalDate));
  }

  descendingDate(): void {
    this.todos.sort((a, b) => Date.parse(b.finalDate) - Date.parse(a.finalDate));
  }
}
