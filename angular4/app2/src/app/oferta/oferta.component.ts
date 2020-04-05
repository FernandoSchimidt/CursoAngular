import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs';
import { interval } from 'rxjs'
import {Observer}from'rxjs'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })
    // this.route.params.subscribe((parametro: any) => {console.log(parametro)},
    //   (erro: any) => console.log(erro),
    //   () => console.log('processamento foi classificado como concluido')
    // )
    // let tempo = interval(2000)

    // tempo.subscribe((intervalo:number)=>{
    //   console.log(intervalo)
    // })
    //observable(observalvel)
    let meuuObservableTeste = Observable.create((observer:Observer<number>)=>{
      observer.next(1)
      observer.next(3)
    })
    
    //observable(observador)
    meuuObservableTeste.subscribe(
      (resultado:number)=>console.log(resultado+10)
    )
  }
}
