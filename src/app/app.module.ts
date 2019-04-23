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

@NgModule({
  declarations: [
    AppComponent,
    mySummary,
    FavComponent,
    CustomInputDirective,
    OrderDetailsFormComponent,
    CategoriesComponent,
    HomeComponent,
    NavbarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
