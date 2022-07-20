import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonageComponent } from './components/list-personage/list-personage.component';
import { Error404Component } from './core/error404/error404.component';
// import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ListPersonageComponent
  },{
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
