import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodosService} from '../../services';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  @Input()
  listId: string;
  constructor(private todosService: TodosService) {
  }

  formTodo = new FormGroup(
    {
      title: new FormControl(''),
      body: new FormControl(''),
      finalDate: new FormControl(''),
    }
  );

  ngOnInit(): void {
  }

  forFlag(): void {

  }

  saveTodo(): void {
    this.todosService.saveNewTodo(this.formTodo, this.listId);
  }
}
