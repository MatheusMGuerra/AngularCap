import { Component } from "@angular/core";
//Após criar a pasta do primeiro componente personalizado dentro da pasta app, que é componente principal, tudo começa pelo arquivo .ts:
//Passo 1: criar a classe que será exportada
//Passo 2: Criar o decorador acima da classe, utilizando o @Component
@Component({
    selector: "app-primeiro-componente",
    template: "<h1>Este é o primeiro componente Angular!</h1>",
    styleUrls: []
})
export class PrimeiroComponenteComponent {}