import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  
  products :any[];
  filteredProducts:any[];
  subscriber : Subscription;
  constructor( private db : AngularFireDatabase ) { 
     this.subscriber = db.list('/addedProducts').snapshotChanges().subscribe( prod => {
      this.filteredProducts = this.products = prod;
    } )
   }
   filter(queryString){
    if(queryString){
      
      this.filteredProducts = this.products.filter( p => 
        
        p.payload.val().title.includes(queryString.toLocaleLowerCase()) );
    }else{
      this.filteredProducts = this.products
    }
   }

   ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  

}
