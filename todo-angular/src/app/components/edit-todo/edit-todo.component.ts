import {Component, Input, OnInit} from '@angular/core';
import {TodosService} from '../../services';
import {FormControl, FormGroup} from '@angular/forms';
import {Todo} from '../../interfaces';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  @Input()
  ListId: string;
  @Input()
  TodoId: number;
  @Input()
  todo: Todo;
  flag = true;
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
    this.formTodo.patchValue({
      title: this.todo.title,
      body: this.todo.body,
      finalDate: this.todo.finalDate,
    });
  }

  editTodo(): void {
    this.todosService.editTodo(this.ListId, this.TodoId, this.formTodo);
    this.flag = !this.flag;
  }
}
