import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor(activeRouterLink: ActivatedRoute, public router: Router, private myService: CartService) {
    this.id = activeRouterLink.snapshot.params.id;
  }
  ngOnInit() {
    this.myService.getUserCart(this.id)
      .subscribe((userCart) => {
        console.log("userCart", userCart);
        this.userCart = userCart[0].productsList;
        console.log("this.userCart.productsList", this.userCart);
        this.count = this.userCart.length;

        // const productsId = [];
        // for (let i = 0; i < this.userCart.productsList.length; i++) {
        //   productsId.push(this.userCart.productsList[i].productId)
        // }
        //console.log(productsId)
        // for(let i=0; i<this.productsId.length; i++){
        //   //call prod service
        //   //push prod in productsList
        //   this.productsList.push(this.userCart.productsList[i].productId)
        // }
      },
        (err) => {
          console.log(err);
        });
  }

  id: string = "5ea457ee4387c02984646e91";
  userCart; //from service
  //productsId; //from service
  //productsList; //from service
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
  count;
  //count = this.cartItems.productsList.length;
  objectKeys = Object.keys;
  product = [{
    price: "12000",
    title: "HP Laptop",
    details: {
      brand: "HP",
      processor: "i core",
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
      processor: "i core",
      ram: "256",
      hardDisk: "256",
    }
  },
  ]

}
