import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSearch ,faPercent} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery'  
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private productsService: ProductsService) {

  }

  // products = [
  //   {
  //     id:1,
  //     title: "Dell Inspiron-G5-5590 (Intel® Core CI7-9750H -16GB -1TB+512GBSS - Nvidia RTX 2070 8G -15.6) Black",
  //     images: ["assets/images/1.jpg"],
  //     price: 12319,
  //     details:
  //     {
  //       brand: "intal",
  //       processor: "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       ram: "16GB DDR4, 2666MHz",
  //       hardDisk: "1TB+512GB SSD",
  //       graphicsCard: "Nvidia RTX 2070 8G",
  //       color: "orange"
  //     },
  //     quantity: 5
  //   },
  //   {
  //     id:2,
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
  //   },
  //   {
  //     id:3,
  //     title: "Dell Inspiron-G5-5590 (Intel® Core CI7-9750H -16GB -1TB+512GBSS - Nvidia RTX 2070 8G -15.6) Black",
  //     images: ["assets/images/3.jpg"],
  //     price: 12319,
  //     details:
  //     {
  //       brand: "intal",
  //       processor: "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       ram: "16GB DDR4, 2666MHz",
  //       hardDisk: "1TB+512GB SSD",
  //       graphicsCard: "Nvidia RTX 2070 8G",
  //       color: "white"
  //     },
  //     quantity: 5,
  //     ratioOfPromotion:7
  //   },
  //   {
  //     id:4,
  //     title: "Dell Inspiron-G5-5590 (Intel® Core CI7-9750H -16GB -1TB+512GBSS - Nvidia RTX 2070 8G -15.6) Black",
  //     images: ["assets/images/4.jpg"],
  //     price: 12319,
  //     details:
  //     {
  //       brand: "intal",
  //       processor: "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       ram: "16GB DDR4, 2666MHz",
  //       hardDisk: "1TB+512GB SSD",
  //       graphicsCard: "Nvidia RTX 2070 8G",
  //       color: "orange"
  //     },
  //     quantity: 5
  //   },
  //   {
  //     id:5,
  //     title: "Dell Inspiron-G5-5590 (Intel® Core CI7-9750H -16GB -1TB+512GBSS - Nvidia RTX 2070 8G -15.6) Black",
  //     images: ["assets/images/5.jpg"],
  //     price: 12319,
  //     details:
  //     {
  //       brand: "intal",
  //       processor: "9th Generation Intel® Core i7 9750H 12M Cache, up to 4.50",
  //       ram: "16GB DDR4, 2666MHz",
  //       hardDisk: "1TB+512GB SSD",
  //       graphicsCard: "Nvidia RTX 2070 8G",
  //       color: "orange"
  //     },
  //     quantity: 5
  //   }
  // ]
  products;
  subscriber;
  // subscriber2;


  ngOnInit(): void {
    this.getAllProducts();
    this.GetProductByBrandName();
  }

  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
    // this.subscriberSearchBrand.unsubscribe();
    // this.subscriberProductBrandHp.unsubscribe();
  }

  GetKeys(obj) {
    return Object.keys(obj);
  }


  getAllProducts() {
    this.subscriber = this.productsService.getAllProducts().subscribe(
      (products) => {
        if (products) {
          this.products = products;
        }
      },
      (err) => {
        console.log(err);
      })

    console.log(this.products)
  }

  faSearch = faSearch;
  faPercent = faPercent;
  DeleteProductItemID;
  UpdateProductItem;
  search:string;

  DeleteModal(product) {
    this.DeleteProductItemID = product._id;
    console.log(this.DeleteProductItemID);
  }
  Delete(productID) {
    this.subscriber = this.productsService.deleteProduct(productID).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      })
    console.log("yes i delete item no " + productID);
    location.reload();

  }
  Update(product) {
    this.UpdateProductItem = product;
    this.router.navigate(['../products/update/', product._id]);
    console.log(this.UpdateProductItem.title);
  }
  // Details(product)
  // {
  //   this.router.navigate(['../products/Details/',product.id]);
  // }

  // Myproducts
  subscriberSearchBrand
  subscriberProductBrandHp
  GetProductByBrandName()
  {
    this.subscriberSearchBrand = this.productsService._MessageSearch$.subscribe(
      (message)=>{
        if(message==="HP")
        {
          this.subscriberProductBrandHp = this.productsService.getSearchByBrand('HP').subscribe(
            (products)=>{
              this.products = products;
              this.search=""
              console.log("search on HP only")
              
            },
            err=>{
              console.log(err);
            }
          )
        }
        else if(message==="Lenovo")
        {
          this.subscriberProductBrandHp = this.productsService.getSearchByBrand('Lenovo').subscribe(
            (products)=>{
              this.products = products;
              this.search=""
              console.log("search on lenovo only")
            },
            err=>{
              console.log(err);
            }
          )
        }
        else if(message==="Dell")
        {
          this.subscriberProductBrandHp = this.productsService.getSearchByBrand('Dell').subscribe(
            (products)=>{
              this.products = products;
              this.search=""
              console.log("search on Dell only")
            },
            err=>{
              console.log(err);
            }
          )
        }
        else if(message==="Core i3")
        {
          this.subscriberProductBrandHp = this.productsService.getSearchByProcessor('Core i3').subscribe(
            (products)=>{
              this.products = products;
              this.search=""
              console.log("search on Core i3 only")
            },
            err=>{
              console.log(err);
            }
          )
        }
        else if(message==="Core i5")
        {
          this.subscriberProductBrandHp = this.productsService.getSearchByProcessor('Core i5').subscribe(
            (products)=>{
              this.products = products;
              this.search=""
              console.log("search on Core i5 only")
            },
            err=>{
              console.log(err);
            }
          )
        }
        else if(message==="Core i7")
        {
          this.subscriberProductBrandHp = this.productsService.getSearchByProcessor('Core i7').subscribe(
            (products)=>{
              this.products = products;
              this.search=""
              console.log("search on Core i7 only")
            },
            err=>{
              console.log(err);
            }
          )
        }
        else if(message==="Core i9")
        {
          console.log("search on Core i9 only")
          this.subscriberProductBrandHp = this.productsService.getSearchByProcessor('Core i9').subscribe(
            (products)=>{
              this.products = products;
              this.search=""
              console.log("search on Core i9 only")
            },
            err=>{
              console.log(err);
            }
          )
        }
        else if(message==="All Laptop")
        {
          this.subscriberProductBrandHp = this.productsService.getAllProducts().subscribe(
            (products)=>{
              this.products = products;
              this.search=""
            },
            err=>{
              console.log(err);
            }
          )
        }
        else if(message.includes("searchBar: "))
        {
          console.log("yes");
          console.log(message.split("searchBar: ")[1])
          this.search=message.split("searchBar: ")[1];
          this.subscriberProductBrandHp = this.productsService.getAllProducts().subscribe(
            (products)=>{
              this.products = products;
            },
            err=>{
              console.log(err);
            }
          )
        }
      },
      err=>{
        console.log(err);
      }
    )
  }
  
}
