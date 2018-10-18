import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompraModule } from './compra/compra.module';
import {EspectaculoModule} from './espectaculo/espectaculo.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompraModule,
    EspectaculoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
