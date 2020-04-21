import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sliderImages = [
    "assets\\images\\slider\\christin-hume-Hcfwew744z4-unsplash.jpg",
    "assets\\images\\slider\\etienne-boulanger-aafOjsh-9jU-unsplash.jpg",
    "assets\\images\\slider\\christin-hume-mfB1B1s4sMc-unsplash.jpg",
  ];
  sliderTitles = [
    "Stay Home",
    "Don't Save Up",
    "Free Shipping"
  ];
  sliderCaptions = [
    "With delivery to everywhere in Egypt, you can stay safe at home and order any laptop to your doorstep.",
    "With installments, you can buy your dream items right now.",
    "For a limited time, shipping is free for any where in Egypt!",
  ];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = false;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  // promotedLaptops = [
  //   {
  //     "_id": "1",
  //     "title": "Dell Inspiron-G5-5590",
  //     "images": [
  //       "assets\\images\\laptops\\hp-dq1037-laptop-price-in-pakistan-1.jpg"
  //     ],
  //     "price": 12319,
  //     "details": {
  //       "brand": "intal",
  //       "processor": "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       "ram": "16GB DDR4, 2666MHz",
  //       "hardDisk": "1TB+512GB SSD",
  //       "graphicsCard": "Nvidia RTX 2070 8G",
  //       "color": "orange"
  //     },
  //     "quantity": 5,
  //     "promotionRatio": "0.2",
  //   },
  //   {
  //     "_id": "2",
  //     "title": "HP 15-da1044ne",
  //     "images": [
  //       "assets\\images\\laptops\\81UU-PYPSPL._AC_SL1500_.jpg",
  //     ],
  //     "price": 20000,
  //     "promotionRatio": "0.5",
  //     "quantity": 15,
  //     "details": {
  //       "brand": "intal",
  //       "processor": "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       "ram": "16GB DDR4, 2666MHz",
  //       "hardDisk": "1TB+512GB SSD",
  //       "graphicsCard": "Nvidia RTX 2070 8G",
  //       "color": "orange"
  //     },
  //   },
  //   {
  //     "_id": "3",
  //     "title": "Dell Inspiron-G5-5590",
  //     "images": [
  //       "assets\\images\\laptops\\hp-dq1037-laptop-price-in-pakistan-1.jpg"
  //     ],
  //     "price": 12319,
  //     "details": {
  //       "brand": "intal",
  //       "processor": "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       "ram": "16GB DDR4, 2666MHz",
  //       "hardDisk": "1TB+512GB SSD",
  //       "graphicsCard": "Nvidia RTX 2070 8G",
  //       "color": "orange"
  //     },
  //     "quantity": 5,
  //     "promotionRatio": "0.2",
  //   },
  //   {
  //     "_id": "4",
  //     "title": "HP 15-da1044ne",
  //     "images": [
  //       "assets\\images\\laptops\\EliteBook.jpg",
  //       "assets\\images\\laptops\\81UU-PYPSPL._AC_SL1500_.jpg",
  //     ],
  //     "price": 20000,
  //     "promotionRatio": "0.5",
  //     "quantity": 15,
  //     "details": {
  //       "brand": "intal",
  //       "processor": "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       "ram": "16GB DDR4, 2666MHz",
  //       "hardDisk": "1TB+512GB SSD",
  //       "graphicsCard": "Nvidia RTX 2070 8G",
  //       "color": "orange"
  //     },
  //   },
  //   {
  //     "_id": "5",
  //     "title": "Dell Inspiron-G5-5590",
  //     "images": [
  //       "assets\\images\\laptops\\hp-probook-470-g5-back.jpg"
  //     ],
  //     "price": 12319,
  //     "details": {
  //       "brand": "intal",
  //       "processor": "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       "ram": "16GB DDR4, 2666MHz",
  //       "hardDisk": "1TB+512GB SSD",
  //       "graphicsCard": "Nvidia RTX 2070 8G",
  //       "color": "orange"
  //     },
  //     "quantity": 5,
  //     "promotionRatio": "0.2",
  //   },
  //   {
  //     "_id": "6",
  //     "title": "HP 15-da1044ne ee",
  //     "images": [
  //       "assets\\images\\laptops\\81UU-PYPSPL._AC_SL1500_.jpg",
  //       "assets\\images\\laptops\\hp-dq1037-laptop-price-in-pakistan-1.jpg",
  //     ],
  //     "price": 20000,
  //     "promotionRatio": "0.5",
  //     "quantity": 15,
  //     "details": {
  //       "brand": "intel",
  //       "processor": "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       "ram": "16GB DDR4, 2666MHz",
  //       "hardDisk": "1TB+512GB SSD",
  //       "graphicsCard": "Nvidia RTX 2070 8G",
  //       "color": "orange"
  //     },
  //   },
  //   {
  //     "_id": "7",
  //     "title": "HP 15-da1044ne ee",
  //     "images": [
  //       "assets\\images\\laptops\\81UU-PYPSPL._AC_SL1500_.jpg",
  //       "assets\\images\\laptops\\hp-dq1037-laptop-price-in-pakistan-1.jpg",
  //     ],
  //     "price": 20000,
  //     "promotionRatio": "0.5",
  //     "quantity": 15,
  //     "details": {
  //       "brand": "intel",
  //       "processor": "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       "ram": "16GB DDR4, 2666MHz",
  //       "hardDisk": "1TB+512GB SSD",
  //       "graphicsCard": "Nvidia RTX 2070 8G",
  //       "color": "orange"
  //     },
  //   }
  // ]

  GetKeys(obj){
    return Object.keys(obj);
  }

  constructor(private productsService:ProductsService) {

  }

  subscriber;
  promotedLaptops;

  ngOnInit(): void {
    this.getPromotedProducts();
  }

  getPromotedProducts(){
    console.log("hey from component ts")
    this.subscriber = this.productsService.getPromotedProducts().subscribe(
      products=>{
        this.promotedLaptops = products;
      },
      err=>{
        console.log(err);
      }
    )
  }

  ngOnDestroy():void{
    this.subscriber.unsubscribe();
  }

}
