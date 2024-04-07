import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { ResponsePageble } from '../model/responsePageable.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = "http://localhost:8080/lives"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  public getLivesWithFlag(flag: string): WritableSignal<Observable<ResponsePageble>> {
    const responseObservable = this.http.get<ResponsePageble>(`${this.apiUrl}?flag=${flag}`, this.httpOptions);

    return signal(responseObservable)
  }
}
