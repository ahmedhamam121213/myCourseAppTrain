import { ShoppingCartService } from './../../sers/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  quantityCounter = 0;
  
  constructor( private shopingCartServ : ShoppingCartService ) { }

  async ngOnInit() {
    let cart$ =( await this.shopingCartServ.getCard());
    cart$.valueChanges().subscribe( cart => {
      this.quantityCounter = 0;
      for( let productId in cart.items ){
        this.quantityCounter += cart.items[productId].quantity;
        
      }
    })
  }

}
