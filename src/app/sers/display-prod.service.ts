import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayProdService {

  constructor( private db : AngularFireDatabase ) { }

  getProdById(id){
    return this.db.object('/addedProducts/' + id ).valueChanges();
   }
   update( prodID , product ){
    return this.db.object('/addedProducts/' + prodID).update(product);
   }
   delete(prodID){
    return this.db.object('/addedProducts/' + prodID).remove();
   }
}
