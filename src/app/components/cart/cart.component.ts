import { Component, OnInit, SimpleChanges, OnChanges, Input, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {



  constructor(activeRouterLink: ActivatedRoute, public router: Router, 
    private myService: CartService, private productsService :ProductsService,
    private orderService:OrdersService) {
    this.id = activeRouterLink.snapshot.params.id;
  }
  ngOnChanges(changes: SimpleChanges): void {
  
  }
 
  ngOnInit() {
    this.myService.getUserCart(this.id)
    .subscribe((userCart) => {

      this.userCart = userCart[0].productsList; //contains prod id and qty
      this.count = this.userCart.length;

      const products = [];
      for (let i = 0; i < this.userCart.length; i++) {
        products.push({productId: this.userCart[i].productId, productQty: this.userCart[i].quantity})
      }
      console.log("PROD",products)
      this.orderProduct = products;

      console.log("azhar",this.orderProduct) //azhar

      
      for(let i=0; i<products.length; i++){
        this.productsService.getProduct(products[i].productId).subscribe((prod)=>{

          this.productsList.push({product:prod[0], productQty: products[i].productQty}); //details of each product
          // console.log("prooood",prod[0]); 
          this.totalPrice+= prod[0].price;
         
          //console.log(this.productsList);
  
        }
        , (err)=>{console.log(err);})
      }
    },
      (err) => {
        console.log(err);
      });
    
       
      }

  id: string = "5ea457ee4387c02984646e91";
  userCart; //from service
  productsList= []; //from service
  count;
  totalPrice = 0;
  objectKeys = Object.keys;
  subscriberToAddOrder
  orderProduct; //azhar


  CheckOut()
  {
    console.log("CheckOut")
    console.log("List with Out Quntity")
    
  console.log(this.orderProduct)
  let temp = {
    user : this.id,
     date: new Date(),
     price: this.totalPrice,
     products:[
      ],
     
     status:"pending",
  }
    for(let i=0;i<this.orderProduct.length;i++)
    {
      temp.products.push({
        product: this.orderProduct[i].productId,
        quantity: this.orderProduct[i].productQty
      });
    }
  
    this.subscriberToAddOrder = this.orderService.addOrder(temp)
    .subscribe((order)=>{
      console.log("subscribe");
      if(order)
      console.log(order);
    },
    (err)=>{
      console.log(err)
    })
  }

  

}
