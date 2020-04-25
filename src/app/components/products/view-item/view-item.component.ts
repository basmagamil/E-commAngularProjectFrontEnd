import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  images = [1, 2, 3, 4].map((n) => `assets/images/${n}.jpg`);
  constructor(config: NgbCarouselConfig) { 
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  product={
    id:2,
      title: "Dell Inspiron 3593 (Intel® Core™ Ci7-1065G7- 16GB -2TB - Nvidia MX230 4GB -15.6 FHD) Silver",
      images: ["assets/images/2.jpg"],
      price: 12319,
      details:
      {
        brand: "Dell",
        processor: "10th Generation Intel® Core™ Ci7-1065G7 8M Cache, up to 3.90 GHz",
        ram: "16GB, 4Gx2, DDR4, 2400MHz",
        hardDisk: "2TB ",
        graphicsCard: "Nvidia MX230 4GB",
        color: "Silver"
      },
      quantity: 5,
      ratioOfPromotion:3
  }
  ngOnInit(): void {
  }

}
