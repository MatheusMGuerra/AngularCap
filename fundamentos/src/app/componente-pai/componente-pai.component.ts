import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
  caracteristica= 'o pai tem caracteristica X'
  //OBS: Olhar em componente-pai.html o que vai acontecer

  //Primeiro passo é passar esse evento para o componente filho no arquivo html do pai
  juntarCaracteristica(caracteristicaFinal: any){
    alert(`A caracteristica final é ${caracteristicaFinal}`)
  }
}
