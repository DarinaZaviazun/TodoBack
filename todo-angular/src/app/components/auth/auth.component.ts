import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  constructor(private authService: AuthService) {
  }
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }

  tryLogin(): void {
    const user = {username: this.authForm.get('username').value, password: this.authForm.get('password').value};
    this.authService.tryAuth(user.username, user.password).subscribe(el => console.log(el));
  }
}
