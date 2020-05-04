import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit , OnDestroy{

  constructor(private ordersService:OrdersService,
              private userService:UsersService,
              private productService:ProductsService) { }

  ngOnInit(): void {
    this.getAllOrders();

  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  openModal(orderId): void{
    console.log("this.productsarr", this.productsArr);

    this.tempOrderId= orderId;
    this.productsArr = this.orders.find(o=> o._id == orderId).products;
    console.log(this.productsArr)
    this.productTitle=[];
    for(var i=0;i<this.productsArr.length;i++)
          {
            this.subscriberToGetProductTitle=this.productService.getProduct(this.productsArr[i].product).subscribe(
              (products)=>{
                if(products)
                {
                  this.productTitle.push(products[0].title);
                }
              },(err)=>{
                console.log(err);
              }
            )
          }
  }
  tempOrderId;
  tempOrder;
  productsArr = [];
  

  //Azhar updates
  subscriber;
  subscriberToGetUserName;
  subscriberToGetProductTitle;
  subscriberToUpdateOrder;
  orders;
  userName=[];
  productTitle=[];
  getAllOrders(){
    console.log("this.productsarr", this.productsArr);

    this.subscriber = this.ordersService.getOrders().subscribe(
      (orders)=>{
        if(orders)
         { 
          this.orders = orders;
          for(var i=0;i<this.orders.length;i++)
          {
            this.subscriberToGetUserName=this.userService.getUser(orders[i].user).subscribe(
              (user)=>{
                if(user)
                {
                  this.userName.push(user["userName"]);
                }
              },(err)=>{
                console.log(err);
              }
            )
          }
          
         }
      },
      (err)=>{
        console.log(err);
      })

      console.log(this.orders)
  }


  UpdateOrderState(){
    
  }



  onChange(deviceValue,order){
    console.log(deviceValue);
    console.log(order)
    this.subscriberToUpdateOrder = this.ordersService.updateOrder(order._id,order)
    .subscribe((order)=>{
      console.log("No error")
      console.log(order)
    },
    (err)=>{
      console.log(err)
    })
  }
}
