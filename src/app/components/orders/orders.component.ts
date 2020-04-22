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
  openModal(orderId): void{
    this.tempOrderId= orderId;
    this.productsArr = this.orders.find(o=> o.orderId == orderId).products;
    //this.productsArr = this.tempOrder.products;
  }
  tempOrderId;
  //tempOrder;
  productsArr = [];
  orders = [
    {
      userName: "Rawan",
      date: "12-3-2020",
      price: 12000,
      orderId: "Order 1",
      status: "Accepted",
      products: [{
        product: "Id 11",
        //productTitle: "Laptop1",
        quantity: 1,
        isDeleted: false,
      },
      {
        product: "Id 12",
        //productTitle: "Laptop2",
        quantity: 1,
        isDeleted: false,
      },
      ],
    },
    {

      userName: "Rawan",
      date: "12-3-2020",
      price: 12000,
      orderId: "Order 2",
      status: "Rejected",
      products: [{
        product: "Id 21",
        //productTitle: "Laptop1",
        quantity: 1,
        isDeleted: false,
      },
      {
        product: "Id 22",
        //productTitle: "Laptop2",
        quantity: 1,
        isDeleted: false,
      },

      ],
    },
    {

      userName: "Rawan",
      date: "12-3-2020",
      price: 12000,
      orderId: "Order 3",
      status: "Pending",
      products: [{
        product: "Id 31",
        //productTitle: "Laptop1",
        quantity: 1,
        isDeleted: false,
      },
      {
        product: "Id 32",
        //productTitle: "Laptop2",
        quantity: 1,
        isDeleted: false,
      },

      ],
    }
  ]



}
