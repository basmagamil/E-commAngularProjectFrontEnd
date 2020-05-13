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
export class ProductsComponent implements OnInit {

  constructor(private router: Router, public productsService: ProductsService,
    private isadmain:AdminAuthGuardService, public navService:NavbarService, public usersService:UsersService,  private route: ActivatedRoute) {

    // this.products = this.productsService.productsList;
    //   console.log(this.products);
    // console.log("in constractor before ");
    // console.log(this.products);
    // this.GetProductByBrandName();
    // console.log("in constractor after ");
    // console.log(this.products);

    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    
  }

  faSearch = faSearch;
  faPercent = faPercent;
  DeleteProductItemID;
  UpdateProductItem;

  search:string;

  searchQueryFromService;
  searchTitle="";
  products;
  subscriber;

  ngOnInit(): void {
    this.navService.show();
    // if(this.route.snapshot.queryParamMap.get('search')){
    //   this.searchTitle=this.route.snapshot.queryParamMap.get('search');
    //   this.getSearchTitleProducts(this.searchTitle);
    // }
    // else if(this.route.snapshot.queryParamMap.get('brand')){
    //   this.searchTitle=this.route.snapshot.queryParamMap.get('brand');
    //   this.getSearchBrandProducts(this.searchTitle);
    // }
    // else if(this.searchTitle = this.route.snapshot.queryParamMap.get('processor')){
    //   this.searchTitle=this.route.snapshot.queryParamMap.get('processor');
    //   this.getSearchProcessorProducts(this.searchTitle);
    // }
    // else{
    //   this.getAllProducts();
    // }
  }

  GetKeys(obj) {
    return Object.keys(obj);
  }

  // getAllProducts() {
  //   this.subscriber = this.productsService.getAllProducts().subscribe(
  //     (products) => {
  //       if (products) {
  //         this.products = products;
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     })
  //   console.log(this.products)
  // }

  // getSearchTitleProducts(title) {
  //   this.searchQueryFromService=this.productsService.searchQuery;
  //   console.log("searchQueryFromService",this.searchQueryFromService);
  //   this.subscriber = this.productsService.searchByTitle(title).subscribe(
  //     (products) => {
  //       if (products) {
  //         this.products = products;
  //         this.productsService.productsList = products;
  //         console.log("this.productsService.productsList")
  //         console.log(this.productsService.productsList);
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     })
  //   console.log(this.products)
  // }

  // getSearchBrandProducts(brand) {
  //   this.subscriber = this.productsService.searchByBrand(brand).subscribe(
  //     (products) => {
  //       if (products) {
  //         this.products = products;
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     })
  //   console.log(this.products)
  // }

  // getSearchProcessorProducts(processor) {
  //   this.subscriber = this.productsService.searchByProcessor(processor).subscribe(
  //     (products) => {
  //       if (products) {
  //         this.products = products;
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     })
  //   console.log(this.products)
  // }


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
}
