import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { SobreComponent } from './pages/sobre/sobre.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'not-found', component: NotFoundComponent },

  { path: 'sobre', component: SobreComponent },
  { path: 'catalogo', component: CatalogoComponent },

  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
