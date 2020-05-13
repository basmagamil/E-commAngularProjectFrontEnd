import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { faSearch ,faPercent} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import * as $ from 'jquery'  
import { ProductsService } from 'src/app/services/products.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { AdminAuthGuardService } from 'src/app/services/admin-auth-guard.service';
import { UsersService } from 'src/app/services/users.service';
import { filter, pairwise, startWith, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy, OnChanges {

  constructor(private router: Router, private productsService: ProductsService,
    private isadmain:AdminAuthGuardService, public navService:NavbarService, public usersService:UsersService,  private route: ActivatedRoute) {
    // console.log("in constractor before ");
    // console.log(this.products);
    // this.GetProductByBrandName();
    // console.log("in constractor after ");
    // console.log(this.products);

    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    
  }
  ngOnChanges(): void {
    if(this.route.snapshot.queryParamMap.get('search')){
      this.searchTitle=this.route.snapshot.queryParamMap.get('search');
      this.getSearchTitleProducts(this.searchTitle);
    }
    else if(this.route.snapshot.queryParamMap.get('brand')){
      this.searchTitle=this.route.snapshot.queryParamMap.get('brand');
      this.getSearchBrandProducts(this.searchTitle);
    }
    else if(this.searchTitle = this.route.snapshot.queryParamMap.get('processor')){
      this.searchTitle=this.route.snapshot.queryParamMap.get('processor');
      this.getSearchProcessorProducts(this.searchTitle);
    }
    else{
      this.getAllProducts();
    }
  }

  searchTitle="";
  products;
  subscriber;
  // subscriber2;
  // public destroyed = new Subject<any>();
  ngOnInit(): void {
    this.navService.show();


    // this.searchTitle = this.route.snapshot.queryParamMap.get('search');
    // this.router.events.pipe(
    //   filter((event: RouterEvent) => event instanceof NavigationEnd),
    //   pairwise(),
    //   filter((events: RouterEvent[]) => events[0].url === events[1].url),
    //   startWith('Initial call'),
    //   takeUntil(this.destroyed)
    // ).subscribe(() => {
    //   if(this.searchTitle){
    //     this.getSearchTitleProducts(this.searchTitle);
    //   }
    //   else{
    //     this.getAllProducts();
    //   }
    // });
  

    // this.route.params.subscribe(params => {
    //   this.searchTitle = params['search'];
    //   if(this.searchTitle){
    //     this.getSearchTitleProducts(this.searchTitle);
    //   }
    //   else{
    //     this.getAllProducts();
    //   }
    // });

    ////THIS ONE

    if(this.route.snapshot.queryParamMap.get('search')){
      this.searchTitle=this.route.snapshot.queryParamMap.get('search');
      this.getSearchTitleProducts(this.searchTitle);
    }
    else if(this.route.snapshot.queryParamMap.get('brand')){
      this.searchTitle=this.route.snapshot.queryParamMap.get('brand');
      this.getSearchBrandProducts(this.searchTitle);
    }
    else if(this.searchTitle = this.route.snapshot.queryParamMap.get('processor')){
      this.searchTitle=this.route.snapshot.queryParamMap.get('processor');
      this.getSearchProcessorProducts(this.searchTitle);
    }
    else{
      this.getAllProducts();
    }

    // this.searchTitle = this.route.snapshot.queryParamMap.get('search');
    // if(this.searchTitle){
    //   this.getSearchTitleProducts(this.searchTitle);
    // }
    // else{
    //   this.getAllProducts();
    // }



    // location.reload();

  //   this.GetProductByBrandName();
  //  //this.getAllProducts();
  //  console.log("in ngOnInit before ");
  //  console.log(this.products);
  //  this.GetProductByBrandName();
  //  console.log("in ngOnInit after ");
  //  console.log(this.products);
  //   this.products;
  }

  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
   // this.subscriberSearchBrand.unsubscribe();
    //this.subscriberProductBrandHp.unsubscribe();
    
    
    // this.destroyed.next();
    // this.destroyed.complete();
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

  getSearchTitleProducts(title) {
    this.subscriber = this.productsService.searchByTitle(title).subscribe(
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

  getSearchBrandProducts(brand) {
    this.subscriber = this.productsService.searchByBrand(brand).subscribe(
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

  getSearchProcessorProducts(processor) {
    this.subscriber = this.productsService.searchByProcessor(processor).subscribe(
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

  
  // subscriberSearchBrand
  // subscriberProductBrandHp
  // GetProductByBrandName()
  // {
  //   console.log('I am in search ')
  //   this.subscriberSearchBrand = this.productsService._MessageSearch$.subscribe(
  //     (message)=>{
  //       if(message==="HP")
  //       {
  //         this.subscriberProductBrandHp = this.productsService.getSearchByBrand('HP').subscribe(
  //           (product)=>{
  //             this.products = product;
  //             this.search=""
  //             console.log("search on HP only")
  //             console.log(this.products)
  //           },
  //           err=>{
  //             console.log(err);
  //           }
  //         )
  //       }
  //       else if(message==="Lenovo")
  //       {
  //         this.subscriberProductBrandHp = this.productsService.getSearchByBrand('Lenovo').subscribe(
  //           (products)=>{
  //             this.products = products;
  //             this.search=""
  //             console.log("search on lenovo only")
  //           },
  //           err=>{
  //             console.log(err);
  //           }
  //         )
  //       }
  //       else if(message==="Dell")
  //       {
  //         this.subscriberProductBrandHp = this.productsService.getSearchByBrand('Dell').subscribe(
  //           (products)=>{
  //             this.products = products;
  //             this.search=""
  //             console.log("search on Dell only")
  //           },
  //           err=>{
  //             console.log(err);
  //           }
  //         )
  //       }
  //       else if(message==="Core i3")
  //       {
  //         this.subscriberProductBrandHp = this.productsService.getSearchByProcessor('Core i3').subscribe(
  //           (products)=>{
  //             this.products = products;
  //             this.search=""
  //             console.log("search on Core i3 only")
  //           },
  //           err=>{
  //             console.log(err);
  //           }
  //         )
  //       }
  //       else if(message==="Core i5")
  //       {
  //         this.subscriberProductBrandHp = this.productsService.getSearchByProcessor('Core i5').subscribe(
  //           (products)=>{
  //             this.products = products;
  //             this.search=""
  //             console.log("search on Core i5 only")
  //           },
  //           err=>{
  //             console.log(err);
  //           }
  //         )
  //       }
  //       else if(message==="Core i7")
  //       {
  //         this.subscriberProductBrandHp = this.productsService.getSearchByProcessor('Core i7').subscribe(
  //           (products)=>{
  //             this.products = products;
  //             this.search=""
  //             console.log("search on Core i7 only")
  //           },
  //           err=>{
  //             console.log(err);
  //           }
  //         )
  //       }
  //       else if(message==="Core i9")
  //       {
  //         console.log("search on Core i9 only")
  //         this.subscriberProductBrandHp = this.productsService.getSearchByProcessor('Core i9').subscribe(
  //           (products)=>{
  //             this.products = products;
  //             this.search=""
  //             console.log("search on Core i9 only")
  //           },
  //           err=>{
  //             console.log(err);
  //           }
  //         )
  //       }
  //       else if(message==="All Laptop")
  //       {
  //         this.subscriberProductBrandHp = this.productsService.getAllProducts().subscribe(
  //           (products)=>{
  //             this.products = products;
  //             this.search=""
  //             console.log("All Product");
  //           },
  //           err=>{
  //             console.log(err);
  //           }
  //         )
  //       }
  //       else if(message.includes("searchBar: "))
  //       {
  //         console.log("yes");
  //         console.log(message.split("searchBar: ")[1])
  //         this.search=message.split("searchBar: ")[1];
  //         this.subscriberProductBrandHp = this.productsService.getAllProducts().subscribe(
  //           (products)=>{
  //             this.products = products;
  //           },
  //           err=>{
  //             console.log(err);
  //           }
  //         )
  //       }
  //       console.log('message '+message);
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   )
  // }
  
}
