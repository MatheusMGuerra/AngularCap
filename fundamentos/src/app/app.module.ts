import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicadorPipe } from './multiplicador.pipe';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicadorPipe,
    TerceiroComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
