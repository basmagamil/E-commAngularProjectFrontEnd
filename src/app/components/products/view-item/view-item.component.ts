import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  // images = [1, 2, 3, 4].map((n) => `assets/images/${n}.jpg`);
  constructor(config: NgbCarouselConfig, private productsService:ProductsService,private cartService:CartService, public activeRouterLink:ActivatedRoute) { 
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

    this.id=this.activeRouterLink.snapshot.params.id;
    console.log(this.id)


  }
  // product={
  //   id:2,
  //     title: "Dell Inspiron 3593 (Intel® Core™ Ci7-1065G7- 16GB -2TB - Nvidia MX230 4GB -15.6 FHD) Silver",
  //     images: ["assets/images/2.jpg"],
  //     price: 12319,
  //     details:
  //     {
  //       brand: "Dell",
  //       processor: "10th Generation Intel® Core™ Ci7-1065G7 8M Cache, up to 3.90 GHz",
  //       ram: "16GB, 4Gx2, DDR4, 2400MHz",
  //       hardDisk: "2TB ",
  //       graphicsCard: "Nvidia MX230 4GB",
  //       color: "Silver"
  //     },
  //     quantity: 5,
  //     ratioOfPromotion:3
  // }

  id;
  product;
  subscriber;
  qtyInput;
  ngOnInit(): void {
    this.id=this.activeRouterLink.snapshot.params.id;
    console.log(this.id)

    this.getProduct(this.id);
    console.log(this.product)
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  GetKeys(obj){
    return Object.keys(obj);
  }

  getProduct(id) {
    this.subscriber = this.productsService.getProduct(id).subscribe(
      (product) => {
        if (product) {
          this.product = product[0];
          console.log(this.product)
          console.log(product)
          console.log(this.id)
        }
      },
      (err) => {
        console.log(err);
      })

    console.log(this.product)
  }
  addToCartHandler(product, qtyInput){
    console.log("prod ID", product._id,"qty" ,qtyInput);
    this.cartService.addProductToCart(product, this.qtyInput)
  }
}
