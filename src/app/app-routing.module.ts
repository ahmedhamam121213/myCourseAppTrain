import { AdminProductsFormComponent } from './comps/admin-products-form/admin-products-form.component';
import { AdminProductsComponent } from './comps/admin-products/admin-products.component';
import { OrderDetailsFormComponent } from './comps/order-details-form/order-details-form.component';
import { HomeComponent } from './comps/home/home.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  { path : "categories" , component : CategoriesComponent },
  { path : "" , component : HomeComponent },
  { path : "order-details" , component : OrderDetailsFormComponent },
  { path : "admin-product" , component : AdminProductsComponent },
  { path : "admin-product-form" , component : AdminProductsFormComponent },
  { path : "admin-product-form/:id" , component : AdminProductsFormComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
