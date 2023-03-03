import { Component } from '@angular/core';
import { Celular } from '../Types/Celular';

@Component({
  selector: 'app-renderizar-li',
  templateUrl: './renderizar-li.component.html',
  styleUrls: ['./renderizar-li.component.css']
})
export class RenderizarLiComponent {
  celulares: Celular[] = [
    {id:1, nome:'Iphone', esgotado:false},
    {id:2, nome:'Galaxy S', esgotado:false},
    {id:3, nome:'Pixel', esgotado:true}
  ]
}
