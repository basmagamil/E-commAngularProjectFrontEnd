import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EdituserComponent } from './edituser/edituser.component';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  id;
  subscriber;
  user;

  // orders=[{
  //   date: 11-3-2020,
  //   price: 5000,
  //   products: [],
  //   status: "pending"
  // }]


  constructor(activeRouterLink:ActivatedRoute, 
    public router:Router, private usersService:UsersService, 
    private modalService: NgbModal,private ordersService:OrdersService,
    private productService:ProductsService) {
    this.id=activeRouterLink.snapshot.params.id;
    // this.getUser();
  }

  ngOnInit(): void {
    this.getUser();
    this.getOrder();
  }

  onClickEditInfoModal(){
    // console.log(this.user)
    const modalRef = this.modalService.open(EdituserComponent);
    modalRef.componentInstance.user = this.user;
    // modalRef.componentInstance.test = "heyy";
    // modalRef.result.then((result) => {
    //   if (result) {
    //    this.user=result;
    //   }
    //   });
  }

  getUser(){
    this.subscriber = this.usersService.getUser(this.id).subscribe(
      user=>{
        this.user = user;
      },
      err=>{
        console.log(err);
      }
    )
  }
  
  updateUser(user){
    this.subscriber = this.usersService.updateUser(this.id, user).subscribe(
      user=>{
        this.user = user;
      },
      err=>{
        console.log(err);
      }
    )
  }

  //Azhar
  subscriberOrder;
  subscriberToUpdateOrder;
  subscriberToGetProductTitle;
  orders;
  tempOrderId;
  tempOrder;
  productsArr = [];
  productTitle=[];
  getOrder()
  {
    this.subscriberOrder = this.ordersService.getOrder(this.id).subscribe(
      orders=>{
        this.orders = orders;
      },
      err=>{
        console.log(err);
      }
    )
  }

  Cancle(order)
  {
    order.status="cancelled";
    this.subscriberToUpdateOrder = this.ordersService.updateOrder(order._id,order)
    .subscribe((order)=>{
    },
    (err)=>{
      console.log(err)
    })
  }

  openModal(orderId): void{
    this.tempOrderId= orderId;
    this.productsArr = this.orders.find(o=> o._id == orderId).products;
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
 
  ngOnDestroy():void{
    // this.subscriber.unsubscribe();
    this.subscriberOrder.unsubscribe();
  }
}
