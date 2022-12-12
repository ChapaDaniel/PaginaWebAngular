import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteDComponent } from './componentes/componente-d/componente-d.component';
import { ComponenteEComponent } from './componentes/componente-e/componente-e.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteDComponent,
    ComponenteEComponent,
    ComponentesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


{
  localStorage.setItem('valorTotal', this.numero)
}