import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico1',
  templateUrl: './servico1.component.html',
  styleUrls: ['./servico1.component.css']
})
export class Servico1Component {
  nome: string = ''
  nomes: string[] = []

  //Para que o serviço logger seja injetado dentro dessa classe, é necessário usar o construtor:
  constructor(private logger: LoggerService) {

  }
  addNome(){
    this.logger.logar(`${this.nome} foi adicionado.`)
  }

  receberNomes(listaNomes: string[]){
    for(let elementos of this.logger.exibeLogs()) {
      this.nomes.push(elementos)
    }
  }
}
