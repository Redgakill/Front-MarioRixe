import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'any',
})
export class FightServices {
  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000';

  getAllAttacks():Observable<any>{
    return this.http.get<any>(`${this.url}/attacks`);
  }

  Fight(data:any):Observable<any>{
    return this.http.post<any>(`${this.url}/fight`,data);
  }
  getAttackById(id:string):Observable<any>{
    return this.http.get<any>(`${this.url}/attacks/${id}`);
  }
}
