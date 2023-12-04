// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './notas/notas.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: 'notas', component: NotasComponent },
  {path: 'lista', component: ListaComponent},
  { path: 'editar/:id', component: EditarComponent }
  // Otras rutas si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

