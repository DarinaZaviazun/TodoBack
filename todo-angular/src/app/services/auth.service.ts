import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from '../config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  tryAuth(name: string, pass: string): Observable<any> {
   return this.httpClient.post<any>(URL.authUrl, {username: name, password: pass}
    );
  }
}
/*,
      {
      headers: {Authorization : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOi
      JhZG1pbiJ9.CGrnZ0Jy0EOJZ117MDjjPAB-G7xxmOJgv2i54VsH7RwMqQjV-Ts01H0dWrzNxVyuf2MLU2mG4Oi52Aw9nJRGwQ'}
    }*/
