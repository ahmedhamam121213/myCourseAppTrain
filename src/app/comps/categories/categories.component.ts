import { ShoppingCartService } from './../../sers/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnDestroy , OnInit {
  
  products:any[]=[];
  subscriber : Subscription;
  categories;
  category;
  filteredProduct :any[]=[];
  prod;
  cart:any;
  constructor( private db : AngularFireDatabase ,
               private route:ActivatedRoute,
               private shopCartServ : ShoppingCartService) { 
    this.subscriber = this.db.list("/addedProducts").snapshotChanges().subscribe( p => {
      this.products = p;
      this.route.queryParamMap.subscribe( params => {
        this.category = params.get('category');
        this.filteredProduct = (this.category) ? this.products.filter( p => p.payload.val().catName === this.category ) : this.products  

      } )
            
    } )

    this.categories =  db.list('/products').valueChanges();

   }



   addToCart(prod){
     this.shopCartServ.addToCart(prod);
   }

   removeFromCart(prod){
    this.shopCartServ.removeFromCart(prod);
  }

   ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  async ngOnInit():Promise<void>{
    ( await this.shopCartServ.getCard()).valueChanges().subscribe( cart => {
      this.cart = cart;
      
    } )
  }

  getQuantity(prod){
    if( ! this.cart ){
      return 0;
    }else{
      let item = this.cart.items[prod.key].quantity;
      return item;
    }
  }


}
