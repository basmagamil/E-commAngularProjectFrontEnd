import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orders = [
    {

      userName: "Rawan",
      date: "12-3-2020",
      price: 12000,
      products: [{
        productTitle: "Laptop1",
        quantity: 1,
        isDeleted: false,
      },
      {
        productTitle: "Laptop2",
        quantity: 1,
        isDeleted: false,
      },

      ],
      status: "accepted"
    }
  ]



}
