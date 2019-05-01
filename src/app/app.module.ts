import { DisplayProdService } from './sers/display-prod.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { mySummary } from './summary.pipe';
import { FavComponent } from './fav/fav.component';
import { CustomInputDirective } from './custom-input.directive';
import { OrderDetailsFormComponent } from './comps/order-details-form/order-details-form.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { HomeComponent } from './comps/home/home.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { AdminProductsComponent } from './comps/admin-products/admin-products.component';
import { AdminProductsFormComponent } from './comps/admin-products-form/admin-products-form.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  declarations: [
    AppComponent,
    mySummary,
    FavComponent,
    CustomInputDirective,
    OrderDetailsFormComponent,
    CategoriesComponent,
    HomeComponent,
    NavbarComponent,
    AdminProductsComponent,
    AdminProductsFormComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    AngularFireDatabaseModule,
	AngularFireModule.initializeApp(environment.firebase) 
  ],
  providers: [ DisplayProdService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
