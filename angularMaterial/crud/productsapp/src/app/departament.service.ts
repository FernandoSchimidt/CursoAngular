import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departament } from './departament'

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  readonly url = 'http://localhost:3000/departaments';

  constructor(private http: HttpClient) {

  }
  get(): Observable<Departament[]> {
    return this.http.get<Departament[]>(this.url);
  }
  add(d: Departament): Observable<Departament> {
    return this.http.post<Departament>(this.url, d);
  }
}
