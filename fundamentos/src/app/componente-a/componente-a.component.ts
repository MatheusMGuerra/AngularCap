import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent {
  corDeA = 'Vermelha'
//Após o método criado aqui em A, seguir para o componente-B.ts para criar o @output do evento que vai chamar esse método para ser executado. 
  definirPaleta(paleta: any){
    alert(`As cores finais de A foram ${paleta}`)
  }
}
