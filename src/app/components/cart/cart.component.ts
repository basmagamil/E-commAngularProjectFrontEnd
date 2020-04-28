import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor(activeRouterLink: ActivatedRoute, public router: Router, private myService: CartService, private productsService :ProductsService) {
    this.id = activeRouterLink.snapshot.params.id;
  }
  ngOnInit() {
    this.myService.getUserCart(this.id)
      .subscribe((userCart) => {
        console.log("userCart", userCart);
        this.userCart = userCart[0].productsList;
        console.log("this.userCart.productsList", this.userCart);
        this.count = this.userCart.length;

        const productsId = [];
        for (let i = 0; i < this.userCart.length; i++) {
          productsId.push(this.userCart[i].productId)
        }
        console.log(productsId)
        for(let i=0; i<productsId.length; i++){
          this.productsService.getProduct(productsId[i]).subscribe((prod)=>{
            this.productsList.push(prod[0]);
            console.log("prooood",prod[0]);
            this.totalPrice+= prod[0].price;
            //console.log(this.totalPrice);
          }
          , (err)=>{console.log(err);})
        }
      },
        (err) => {
          console.log(err);
        });
        
        this.myService.addProductToCart(this.newProd, this.newProdQty).subscribe((prod)=>{
          console.log(prod)
        },
        (err)=>{
          console.log(err)
        })
  }

  id: string = "5ea457ee4387c02984646e91";
  userCart; //from service
  productsList= []; //from service
  count;
  totalPrice = 0;
  objectKeys = Object.keys;
  newProd;
  newProdQty;

 

}
