import { Injectable } from '@angular/core';

import { Tarefa } from './';
import { TarefasModule } from '../tarefas.module';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }
}

listarTodos(): Tarefa[]{
  const tarefas = localStorage['tarefas'];
  return tarefas : JSON.parse(tarefas): [];
}

cadastrar(tarefa: Tarefa): void {
  const tarefas = this.listarTodos();
  tarefa.id = new Date().getTime();
  TarefasModule.push(tarefa);
  localStorage['tarefas'] = JSON.stringify(tarefas);
}
