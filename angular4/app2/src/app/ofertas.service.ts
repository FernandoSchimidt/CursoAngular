import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { getLocaleDayPeriods } from '@angular/common'

@Injectable()
export class OfertasService {
    constructor(private http: HttpClient) { }


    public getOfertas(): Promise<Oferta[]> {
        //Efetuar uma requisiçaõ http
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta)
        //retornar um promise

    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }
    

}

// json-server --watch banco-de-dados.json