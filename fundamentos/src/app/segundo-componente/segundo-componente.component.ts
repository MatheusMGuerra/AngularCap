import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Matheus";
  dataNasc = "1996-09-03";
  endereco = {
    logradouro : 'Av Santa Rosa',
    num: 151,
    cidade: 'Olinda',
    uf: 'PE',
    bairro: 'Águas Compridas'
  }
}
