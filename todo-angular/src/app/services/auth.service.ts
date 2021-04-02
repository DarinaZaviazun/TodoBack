import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from '../config';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  myStorage = window.localStorage;

  constructor(private httpClient: HttpClient) { }


  tryAuth(name: string, pass: string): void {
   this.httpClient.post<any>(URL.authUrl, {username: name, password: pass},
     {responseType: 'json', observe: 'response'}
    ).subscribe((response: any) => this.myStorage.setItem('Token', response.headers.get('authorization')));
  }
}
