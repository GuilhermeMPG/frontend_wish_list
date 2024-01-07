import { SigninComponent } from './auth/components/signin/signin.component';
import { HomeComponent } from './pages/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaWishComponent } from './pages/components/tabela-wish/tabela-wish.component';

const routes: Routes = [ {
  path: 'signin',
  component: SigninComponent ,

}, {
  path: 'home',
  component: HomeComponent ,

},{
  path: 'wish',
  component: TabelaWishComponent,

},{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
