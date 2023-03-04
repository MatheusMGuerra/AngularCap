import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {
  @Input() caracteristica = ''
  @Output() caracFinal = new EventEmitter()
  //Após criar o @output do evento personalizado(criado em pai.ts e definido em pai.html), será criado um botão para disparar esse evento em filho.html
  caracteristica2 = ''
}
