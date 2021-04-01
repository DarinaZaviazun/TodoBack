import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL} from '../config';
import {TodoList} from '../interfaces';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public entities$: BehaviorSubject<TodoList[]> = new BehaviorSubject<TodoList[]>([]);
  private todoList: TodoList[] = [];
  constructor(private httpClient: HttpClient) {
  }

  public getLists(): void {
    this.httpClient.get<TodoList[]>(URL.lists)
      .subscribe(el => {
        this.todoList = el;
        this.entities$.next(this.todoList);
      });
  }

  sendForm(title: string): void {
    this.httpClient.post<string>(URL.list + '/save', title)
      .subscribe(() => this.getLists());
  }

  editList(title: string, id: number): void {
    this.httpClient.put<string>(`${URL.list}/${id}/update`, title)
      .subscribe(() => this.getLists());

  }

  deleteList(id: number): void  {
    this.httpClient.delete<string>(`${URL.list}/${id}/delete`)
      .subscribe(() => this.getLists());

  }

  public searchLists(word: string): void {
    if (word === '') { return this.getLists(); }
    this.httpClient.post<TodoList[]>(`${URL.lists}/search`, word)
      .subscribe(el => {
        this.todoList = el;
        this.entities$.next(this.todoList);
      });
  }
}
