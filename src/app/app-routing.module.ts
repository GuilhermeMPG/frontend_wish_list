import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaWishComponent } from './pages/components/tabela-wish/tabela-wish.component';

const routes: Routes = [  {
  path: '',
  component: TabelaWishComponent,
 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
