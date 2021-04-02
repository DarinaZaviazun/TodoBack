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
  myStorage = window.localStorage;
  tokenData = this.myStorage.getItem('Token');
  constructor(private httpClient: HttpClient) {
  }

  public getLists(): void {
    this.httpClient.get<TodoList[]>(URL.lists,
      {headers: {Authorization: this.tokenData}})
      .subscribe(el => {
        this.todoList = el;
        this.entities$.next(this.todoList);
      });
  }

  sendForm(title: string): void {
    this.httpClient.post<string>(URL.list + '/save', title,
      {headers: {Authorization: this.tokenData}})
      .subscribe(() => this.getLists());
  }

  editList(title: string, id: number): void {
    this.httpClient.put<string>(`${URL.list}/${id}/update`, title,
      {headers: {Authorization: this.tokenData}})
      .subscribe(() => this.getLists());

  }

  deleteList(id: number): void  {
    this.httpClient.delete<string>(`${URL.list}/${id}/delete`,
      {headers: {Authorization: this.tokenData}})
      .subscribe(() => this.getLists());

  }

  public searchLists(word: string): void {
    if (word === '') { return this.getLists(); }
    this.httpClient.post<TodoList[]>(`${URL.lists}/search`, word,
      {headers: {Authorization: this.tokenData}})
      .subscribe(el => {
        this.todoList = el;
        this.entities$.next(this.todoList);
      });
  }
}
