import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Seguro } from '../models/Seguro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private API_SEGUROS = 'http://localhost:9000';

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(seguro: Seguro) {
    this.http.post(this.API_SEGUROS + '/api/seguros', seguro)
      .subscribe(
        () => alert('Seguro cadastrado com sucesso'),
        (err) => console.log('Erro ao cadastraR SEGURO')
      );
  }
  listar(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.API_SEGUROS + '/api/seguros')
  }
}
