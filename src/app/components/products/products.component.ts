import { Component, OnInit } from '@angular/core';
import { faSearch ,faPercent} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery'  

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { 
   
  }
  
  products = [
    {
      id:1,
      title: "Dell Inspiron-G5-5590 (Intel® Core CI7-9750H -16GB -1TB+512GBSS - Nvidia RTX 2070 8G -15.6) Black",
      images: ["assets/images/1.jpg"],
      price: 12319,
      details:
      {
        brand: "intal",
        processor: "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
        ram: "16GB DDR4, 2666MHz",
        hardDisk: "1TB+512GB SSD",
        graphicsCard: "Nvidia RTX 2070 8G",
        color: "orange"
      },
      quantity: 5
    },
    {
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
    },
    {
      id:3,
      title: "Dell Inspiron-G5-5590 (Intel® Core CI7-9750H -16GB -1TB+512GBSS - Nvidia RTX 2070 8G -15.6) Black",
      images: ["assets/images/3.jpg"],
      price: 12319,
      details:
      {
        brand: "intal",
        processor: "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
        ram: "16GB DDR4, 2666MHz",
        hardDisk: "1TB+512GB SSD",
        graphicsCard: "Nvidia RTX 2070 8G",
        color: "white"
      },
      quantity: 5,
      ratioOfPromotion:7
    },
    {
      id:4,
      title: "Dell Inspiron-G5-5590 (Intel® Core CI7-9750H -16GB -1TB+512GBSS - Nvidia RTX 2070 8G -15.6) Black",
      images: ["assets/images/4.jpg"],
      price: 12319,
      details:
      {
        brand: "intal",
        processor: "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
        ram: "16GB DDR4, 2666MHz",
        hardDisk: "1TB+512GB SSD",
        graphicsCard: "Nvidia RTX 2070 8G",
        color: "orange"
      },
      quantity: 5
    },
    {
      id:5,
      title: "Dell Inspiron-G5-5590 (Intel® Core CI7-9750H -16GB -1TB+512GBSS - Nvidia RTX 2070 8G -15.6) Black",
      images: ["assets/images/5.jpg"],
      price: 12319,
      details:
      {
        brand: "intal",
        processor: "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
        ram: "16GB DDR4, 2666MHz",
        hardDisk: "1TB+512GB SSD",
        graphicsCard: "Nvidia RTX 2070 8G",
        color: "orange"
      },
      quantity: 5
    }
  ]
 

  ngOnInit(): void {
    
  }
  faSearch = faSearch;
  faPercent=faPercent;
  DeleteProductItem;
  UpdateProductItem;


  Delete(product1)
  {
    this.DeleteProductItem=product1.id;
    console.log(this.DeleteProductItem);
  }
  DeletedModal(product)
  {
    console.log("yes i delete item no "+product);
  }
  Update(product)
  {
    this.UpdateProductItem=product;
    this.router.navigate(['../products/update/',product.id]);
    console.log(this.UpdateProductItem.title);
  }
  Details(product)
  {
    this.router.navigate(['../products/Details/',product.id]);
  }
}
