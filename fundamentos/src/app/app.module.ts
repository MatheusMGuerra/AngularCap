import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicadorPipe } from './multiplicador.pipe';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { TimeDoCoracaoComponent } from './time-do-coracao/time-do-coracao.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizarLiComponent } from './renderizar-li/renderizar-li.component';
import { DecoradorInputComponent } from './decorador-input/decorador-input.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { Servico1Component } from './servico1/servico1.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicadorPipe,
    TerceiroComponenteComponent,
    TimeDoCoracaoComponent,
    TwoWayDataBindingComponent,
    RenderizarLiComponent,
    DecoradorInputComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    Servico1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
