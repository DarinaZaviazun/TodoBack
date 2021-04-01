import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../interfaces';
import {TodosService} from '../../services';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;
  @Input()
  ListId: string;
  flag = false;
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  forFlag(): void {
    this.flag = !this.flag;
  }

  deleteTodo(): void {
    this.todosService.deleteTodo(this.ListId, this.todo.id);
  }
}
