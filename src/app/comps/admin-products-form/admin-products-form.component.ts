import { DisplayProdService } from './../../sers/display-prod.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/take";

@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.css']
})
export class AdminProductsFormComponent implements OnInit {

  categories;
  prodDetails={};
  id;
  constructor( private db : AngularFireDatabase,
               private router : Router,
               private route: ActivatedRoute,
               private displayProd : DisplayProdService ) { 
     this.categories =  db.list('/products').valueChanges();
     this.id = this.route.snapshot.paramMap.get('id');
     this.displayProd.getProdById(this.id).take(1).subscribe( p => {

      if(p){
        this.prodDetails = p;
        
      }
     } )
                
     
   }
   save(product){
     if( this.id ){
       this.displayProd.update(this.id,product)
     }else{
      this.db.list("/addedProducts").push(product); 
     }
    
    this.router.navigate(['admin-product']);
   }
   delete(){
     if( confirm("are you sure to delete this item") ){
      this.displayProd.delete(this.id);
      this.router.navigateByUrl("/admin-product");
     }
   }
  ngOnInit() {
  }

}
