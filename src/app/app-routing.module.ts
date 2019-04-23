import { OrderDetailsFormComponent } from './comps/order-details-form/order-details-form.component';
import { HomeComponent } from './comps/home/home.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  { path : "categories" , component : CategoriesComponent },
  { path : "" , component : HomeComponent },
  { path : "order-details" , component : OrderDetailsFormComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
