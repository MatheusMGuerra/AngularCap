import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decorador-input',
  templateUrl: './decorador-input.component.html',
  styleUrls: ['./decorador-input.component.css']
})
export class DecoradorInputComponent {
  //Para personalizar uma propriedade:
  @Input() nome = ''
  @Input() sobrenome = ''
  //Com esse decorador precedendo a propriedade, essas propriedades poderão ser preenchidas diretamente dentro da tag correspondente ao componente lá em app.component.html
  //OBS: Antes de ir para app.component, lembrar de definir no arquivo html deste componente atual
}
