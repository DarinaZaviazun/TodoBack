import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ListService} from '../../services';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor(private listService: ListService) {
  }

  formList = new FormGroup({
      title: new FormControl(''),
    }
  );

  ngOnInit(): void {
  }

  saveList(): void {
    this.listService.sendForm(this.formList.get('title').value);
  }
}
