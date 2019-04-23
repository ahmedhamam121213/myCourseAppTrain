import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  constructor() { }
  @Input('isSelected') isTrue:boolean = true;
 
  ngOnInit() {
  }
  onclick(){
    this.isTrue = !this.isTrue ;
  
  }
}
