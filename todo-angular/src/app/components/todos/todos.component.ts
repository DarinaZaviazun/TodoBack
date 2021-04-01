import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Todo} from '../../interfaces';
import {TodosService} from '../../services';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  listId: string;
  todos: Observable<Todo[]>;
  toggle = true;
  toggle2 = true;

  constructor(private todosService: TodosService,
              private router: Router) {
    this.listId = this.router.url.split('list/')[1];
  }

  ngOnInit(): void {
    this.todosService.getTodos(this.listId);
    this.todos = this.todosService.entities$;
  }

  search(word: string): void {
    this.todosService.searchTodos(this.listId, word);
  }

  orderId(): void {
    this.toggle = !this.toggle;
    if (this.toggle === true) { this.todosService.ascendingID(); }
    else { this.todosService.descendingID(); }
      }

  orderDate(): void {
    this.toggle2 = !this.toggle2;
    if (this.toggle2 === true) { this.todosService.ascendingDate(); }
    else { this.todosService.descendingDate(); }
  }
}
