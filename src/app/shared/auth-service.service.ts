import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { credentials } from '../models/crdentials';
import {  tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  base_url = environment.baseUrl
  email: string;

  constructor(private http: HttpClient) { }

  getloginfromapi(email,password): Observable<credentials> {
    let url= `${this.base_url}login`
    console.log(url);
    return this.http.post<any>(url,{email: email, password: password },{headers: { skip: 'true' } }).pipe(
      tap(token => this.storetoken(email,token))
    );
  }

  storetoken(email,token) {
    this.email = email;
    localStorage.setItem("email", this.email)
    localStorage.setItem("token", token["token"])
  }

  isUserLogedIn() {
    return !!this.getToken();
  }

  getToken() {
    const token = localStorage.getItem("token");
    console.log(token)
    return token;
  }

  getUserName() {
    return localStorage.getItem("email");
  }
}
