import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id;
 

  constructor(activeRouterLink: ActivatedRoute, public router: Router) {
    this.id = activeRouterLink.snapshot.params.id;
  }
  cartItems = {
    userId: 123,

    productsList: [{
      productId: "P1",
      quantity: 1,
      isDeleted: false
    },
    {
      productId: "P2",
      quantity: 1,
      isDeleted: false
    }
    ]
  }

  count = this.cartItems.productsList.length;
  objectKeys = Object.keys;
  product =[{
    price: "12000",
    title: "HP Laptop",
    details: {
      brand: "HP",
      processor:"i core",
      ram: "256",
      hardDisk: "256",
      graphicsCard: "bla bla",
      color: "black"
    }
  },
  {
    title: "HP Laptop2",
    price: "12000",
    details: {
      brand: "HP",
      processor:"i core",
      ram: "256",
      hardDisk: "256",
    }
  },
]
  ngOnInit(): void {
    
  }

}
