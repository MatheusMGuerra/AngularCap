import { Component } from '@angular/core';

@Component({
  selector: 'app-time-do-coracao',
  templateUrl: './time-do-coracao.component.html',
  styleUrls: ['./time-do-coracao.component.css']
})
export class TimeDoCoracaoComponent {
  escudoReal = "/assets/logoPP.webp"
  nome = "Visitante"

  mostrarSaudacao(){
    alert(`Olá, ${this.nome}`)
  }
}
