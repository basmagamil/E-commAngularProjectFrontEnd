import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSearch ,faPercent} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery'  
import { ProductsService } from 'src/app/services/products.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { AdminAuthGuardService } from 'src/app/services/admin-auth-guard.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private productsService: ProductsService,
    private isadmain:AdminAuthGuardService, public navService:NavbarService) {
    console.log("in constractor before ");
    console.log(this.products);
    this.GetProductByBrandName();
    console.log("in constractor after ");
    console.log(this.products);
  }

  
  products;
  subscriber;
  // subscriber2;
isvisable

  ngOnInit(): void {
    this.navService.show();
   this.getAllProducts();
    this.GetProductByBrandName();
   //this.getAllProducts();
   console.log("in ngOnInit before ");
   console.log(this.products);
   this.GetProductByBrandName();
   console.log("in ngOnInit after ");
   console.log(this.products);
    this.products;
    this.isvisable=this.isadmain.CheckAdminOrNot();
    console.log("admin or not "+this.isvisable);
  }

  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
   // this.subscriberSearchBrand.unsubscribe();
    //this.subscriberProductBrandHp.unsubscribe();
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
  
  subscriberSearchBrand
  subscriberProductBrandHp
  GetProductByBrandName()
  {
    console.log('I am in search ')
    this.subscriberSearchBrand = this.productsService._MessageSearch$.subscribe(
      (message)=>{
        if(message==="HP")
        {
          this.subscriberProductBrandHp = this.productsService.getSearchByBrand('HP').subscribe(
            (product)=>{
              this.products = product;
              this.search=""
              console.log("search on HP only")
              console.log(this.products)
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
              console.log("All Product");
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
        console.log('message '+message);
      },
      err=>{
        console.log(err);
      }
    )
  }
  
}
