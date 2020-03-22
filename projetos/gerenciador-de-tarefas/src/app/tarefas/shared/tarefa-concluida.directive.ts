import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[TarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;

  constructor(private el: Element) { }

  ngOnInit() {
    if (this.tarefaConcluida) {
      this.el.parentElement.style.textDecoration = "line-through"
    }
  }

}
