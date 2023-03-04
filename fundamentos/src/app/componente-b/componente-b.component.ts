import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent {
  @Input() corDeA = ''
  //O @output criará o novo evento
  @Output() mostrarPaleta = new EventEmitter()
  //Depois de criado o evento, basta seguir para componente-A.html para implementar o evento + método dentro dos atributos da tag componente-B.html dentro do arquivo html de componente-A.html
  corDeB = ''
}
