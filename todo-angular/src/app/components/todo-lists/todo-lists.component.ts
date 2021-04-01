import {Component, OnInit} from '@angular/core';
import {ListService} from '../../services';
import {TodoList} from '../../interfaces';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {
  todoLists: Observable<TodoList[]>;
  newList: TodoList[];
  flag = false;

  constructor(private listService: ListService) {
  }

  ngOnInit(): void {
    this.listService.getLists();
    this.todoLists = this.listService.entities$;
  }
  onClick(): void{
    this.flag = !this.flag;
  }

  search(word: string): void{
    this.listService.searchLists(word);
  }
}
