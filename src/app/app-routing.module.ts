import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
