import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ListService} from '../../services';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  @Input()
  titleEdit: string;
  @Input()
  idEdit: number;
  flag = true;
  constructor(private listService: ListService) {
  }


  formList = new FormGroup({
      title: new FormControl(''),
    }
  );

  ngOnInit(): void {
    this.formList.patchValue({
      title: this.titleEdit,
    });
  }

  saveList(): void {
    this.listService.editList(this.formList.get('title').value, this.idEdit);
    this.flag = !this.flag;
  }

}
