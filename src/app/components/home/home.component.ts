import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/services/products.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sliderImages = [
    'http://localhost:3000/christin-hume-Hcfwew744z4-unsplash.jpg',
    'http://localhost:3000/etienne-boulanger-aafOjsh-9jU-unsplash.jpg',
    'http://localhost:3000/christin-hume-mfB1B1s4sMc-unsplash.jpg',
  ];
  sliderTitles = ['Stay Home', "Don't Save Up", 'Free Shipping'];
  sliderCaptions = [
    'With delivery to everywhere in Egypt, you can stay safe at home and order any laptop to your doorstep.',
    'With installments, you can buy your dream items right now.',
    'For a limited time, shipping is free for any where in Egypt!',
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
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }

  GetKeys(obj) {
    return Object.keys(obj);
  }

  constructor(
    private productsService: ProductsService,
    public navService: NavbarService
  ) {}

  subscriber;
  promotedLaptops;

  ngOnInit(): void {
    this.navService.show();
    this.getPromotedProducts();
  }

  getPromotedProducts() {
    this.subscriber = this.productsService.getPromotedProducts().subscribe(
      (products) => {
        this.promotedLaptops = products;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
