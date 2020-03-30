import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter

  constructor(private toastr:ToastrService) {
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }
  showSuccess(){
    this.toastr.success('Resposta Correta!','Acertou')
  }
  showError(){
    this.toastr.error('Resposta errada!','Errou')
  }
  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {

      //Trocar pergunta da rodada
      this.rodada++
      this.showSuccess()

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria')
      }
      this.atualizaRodada()
      //limpar a resposta
      this.resposta = ''
    } else {
      //Diminuir a variavel tentativas
      this.tentativas--
      this.showError()

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
      }
    }
  }
  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
  }
}
