import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TabelaWishComponent } from './modulo1/components/tabela-wish/tabela-wish.component';
import { PrimeNGModuleModule } from './core/prime-ngmodule/prime-ngmodule.module'
import { HttpClientModule } from '@angular/common/http';
import { DialogChangeComponent } from './shared/componets/dialog-change/dialog-change.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabelaWishComponent,
    DialogChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    PrimeNGModuleModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
