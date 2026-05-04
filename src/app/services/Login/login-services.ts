import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class LoginServices {
  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000";


  Connexion(data:any){
    return this.http.post<any>(`${this.url}/users/login`, data);
  }

  Inscription(data:any){
    return this.http.post<any>(`${this.url}/users/signup`, data);
  }

}
