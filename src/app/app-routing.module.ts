import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebModule } from './web/web.module';

const routes: Routes = [
  {
  path: 'web',
  loadChildren: () => WebModule
  },
  {path: '', redirectTo: 'web', pathMatch: 'full'},
  {path: '**', redirectTo: 'web'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
