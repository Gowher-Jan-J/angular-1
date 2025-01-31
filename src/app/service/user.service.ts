import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  onLogin(loginObj:any){
    // debugger;
    return this.http.post('http://localhost:3000/login',loginObj);
  }

  getUsers(){
    return this.http.get('http://localhost:3000/users');
  }
}
