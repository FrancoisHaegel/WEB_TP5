import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }


   login(login:string, password:string ) {
    console.log(login);
    console.log(password);
      return this.http.post<any>(environment.userUrl + '/users/login', {login, password, observe: 'response'});
  }

  register(dto : User) {
    return this.http.post<User>(environment.userUrl + '/users/register', { dto }) 
  }
}