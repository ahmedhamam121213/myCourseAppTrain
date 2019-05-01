import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/take";
import { shoppingCart } from '../shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor( private db : AngularFireDatabase ) { }

  private create(){
   return this.db.list("/shopping-cart").push({
      dateCreated : new Date().getTime()
    })
  }

  private async createOrGetCart(){
    let cartID = localStorage.getItem("cartID"); 
    if( cartID ){
      return cartID;
    }else{
      let result = await this.create();
      localStorage.setItem("cartID" , result.key );
      return result.key;
    }
  }

  public async getCard():Promise<AngularFireObject<shoppingCart>>{
    let carID = await this.createOrGetCart();
    return this.db.object("/shopping-cart/" + carID );
  }
  getItem( cardID , productID ){
    return this.db.object("/shopping-cart/" + cardID + "/items/" + productID );
  }
addToCart(product){
this.updateToCart(product,1);
}

removeFromCart(product){
  this.updateToCart(product,-1);
}

  async updateToCart(product , quantityState){
    let cartID = await this.createOrGetCart();
    let item$ = this.getItem( cartID , product.key );

    item$.snapshotChanges().take(1).subscribe( (item : any) => {
      /*check if product id is exist or not if exists then increase quantity +1 
      else create new object for the new clicked product */
      if( item.payload.exists() ){
        item$.update({ quantity : item.payload.val().quantity + quantityState  })

      }else{
        item$.update({
          product : {
            catName: product.payload.val().catName,
            imageUrl: product.payload.val().imageUrl,
            price: product.payload.val().price,
            title: product.payload.val().title,
          },
          quantity : 1
        })
      }
    } )
  }

}
