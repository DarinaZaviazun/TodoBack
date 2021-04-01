import {Component, Input, OnInit} from '@angular/core';
import {TodoList} from '../../interfaces';
import {ListService} from '../../services';
import {ActivatedRoute, Router} from '@angular/router';
import {root} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  todoList: TodoList;
  flag = false;
  dayCr: string;
  timeCr: string;
  dayUp: string;
  timeUp: string;
  constructor(private service: ListService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dayCr = this.todoList.createdAt.split('T')[0];
    this.timeCr = this.todoList.createdAt.split('T')[1].split('.')[0];
    this.dayUp = this.todoList.updatedAt.split('T')[0];
    this.timeUp = this.todoList.updatedAt.split('T')[1].split('.')[0];

  }

  forFlag(): void {
    this.flag = !this.flag;
  }

  forDelete(): void {
    this.service.deleteList(this.todoList.id);
  }

  showTodos(): void {
    this.router.navigate(['list/' + this.todoList.id]);
  }
}
