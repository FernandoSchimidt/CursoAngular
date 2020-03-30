import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component';
@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 500,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
