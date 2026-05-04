import { Injectable } from '@angular/core';
import { Observable, Observer, timeout } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'any',
})
export class IAServices {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000';

  Report(data: any) :Observable<any>{
    const reponse = this.http.post<Observable<any>>(`${this.url}/IA`,data)
    return reponse
  }
}
