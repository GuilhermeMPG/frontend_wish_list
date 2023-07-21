import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { TabelaWishComponent } from './pages/components/tabela-wish/tabela-wish.component';
import { PrimeNGModuleModule } from './core/prime-ngmodule.module'
import { HttpClientModule } from '@angular/common/http';
import { DialogChangeComponent } from './shared/components/dialog-change/dialog-change.component';
import {FormsModule} from '@angular/forms';
import localePt from '@angular/common/locales/pt'
import {registerLocaleData} from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
registerLocaleData(localePt);
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
    FormsModule,
    NgScrollbarModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
