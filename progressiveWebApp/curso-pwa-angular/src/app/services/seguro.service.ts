import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Seguro } from '../models/Seguro';
import { Observable } from 'rxjs';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private API_SEGUROS = 'http://localhost:9000';

  constructor(
    private http: HttpClient,
    private onlineOfflineService: OnlineOfflineService

  ) {
    this.ouvirStatusConexao();

  }
  private salvarApi(seguro: Seguro) {
    this.http.post(this.API_SEGUROS + '/api/seguros', seguro)
      .subscribe(
        () => alert('Seguro cadastrado com sucesso'),
        (err) => console.log('Erro ao cadastraR SEGURO')
      );
  }

  salvar(seguro: Seguro) {
    if (this.onlineOfflineService.isOnline) {
      this.salvarApi(seguro)
    } else {
      console.log('Salvar seguro no banco local')
    }
  }
  listar(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.API_SEGUROS + '/api/seguros')
  }
  private ouvirStatusConexao() {
    this.onlineOfflineService.statusConexao
      .subscribe(online => {
        if (online) {
          console.log('Enviando os dados para o meu banco local para api')
        } else {
          console.log('Estou offline')
        }
      })
  }
}
