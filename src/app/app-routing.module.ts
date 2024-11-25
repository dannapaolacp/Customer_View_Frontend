//Importar librerias
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';

// Definir variables
const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'summary', component: SummaryComponent } 
];

// Definir modulo de rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Exportar modulo
export class AppRoutingModule { }
