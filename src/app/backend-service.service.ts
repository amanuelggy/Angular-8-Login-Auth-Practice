import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  userStore = [
    { username: 'bob', password: '123'},
    { username: 'bill', password: '123'},
    { username: 'Joe', password: '123'},
    { username: 'John', password: '123'},
  ];

  login(username: string, password: string) {
    const body = {username, password};
    for (let i = 0; i < this.userStore.length; i++) {
      if (this.userStore[i].username === username && this.userStore[i].password === password) {
        return this._http.post<{ token: string }>('http://demo3782564.mockable.io/login', body);
      }

    }
    // this.userStore.forEach(user => {
    // });
    return this._http.post<{ token: string }>(' http://demo3782564.mockable.io/loginError', body);
  }
  constructor(private _http: HttpClient) { }
}
