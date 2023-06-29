import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { authGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'servico-prestado', component: LayoutComponent, canActivate: [authGuard],  children: [
      { path: 'form', component: ServicoPrestadoFormComponent },
      { path: 'listagem', component: ServicoPrestadoListaComponent },
      { path: '', redirectTo: '/servico-prestado/listagem', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }