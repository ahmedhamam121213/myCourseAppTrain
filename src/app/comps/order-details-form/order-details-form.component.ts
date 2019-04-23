import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-details-form',
  templateUrl: './order-details-form.component.html',
  styleUrls: ['./order-details-form.component.css']
})
export class OrderDetailsFormComponent implements OnInit {

  method = [
    {id:"1" , name: "phone" },
    {id:"2" , name: "mobile" },
  ];
  constructor() { }


  ngOnInit() {
  }

}
