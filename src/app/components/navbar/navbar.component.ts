import { Component, OnInit } from '@angular/core';
import { faSearch, faUser, faShoppingCart, faSignOutAlt, faSignInAlt, faGlobe, faAngleDown, faShoppingBag, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;
  faGlobe = faGlobe;
  faAngleDown = faAngleDown;
  faShoppingBag = faShoppingBag;
  faClipboardList = faClipboardList;
  

  id;
  user;
  subscriber;

  isCollapsed: boolean;

  constructor(private usersService:UsersService,private productService:ProductsService,
    private router: Router) {
    this.isCollapsed=true;
    // this.id = "5ea33e292b361551e0d428fb";
    this.id = "5ea457ee4387c02984646e91";
    // this.id = "5ea464c3b4ec50572cccc954";
    //this.id = "5ea464c3b4ec50572cccc954";
  }

  ngOnInit(): void {
    this.getUser();
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
  SearchOnHPLaptop()
  {
    this.productService.sendMessageSearch('HP');
  }
  SearchOnLenovoLaptop()
  {
    this.productService.sendMessageSearch('Lenovo');
  }
  SearchOnDellLaptop()
  {
    this.productService.sendMessageSearch('Dell');
  }
  SearchOnLaptopCore_i3()
  {
    this.productService.sendMessageSearch('Core i3');
  }
  SearchOnLaptopCore_i5()
  {
    this.productService.sendMessageSearch('Core i5');
  }
  SearchOnLaptopCore_i7()
  {
    this.productService.sendMessageSearch('Core i7');
  }
  SearchOnLaptopCore_i9()
  {
    this.productService.sendMessageSearch('Core i9');
  }
  SearchOnAllLaptop()
  {
    this.router.navigate(['../products']);
    this.productService.sendMessageSearch('All Laptop');
  }
 search:string;
  GeneralSearch()
  {
    console.log(`search ${this.search}`)
    let x=`searchBar: azhar kamel search`
   let u= x.split("searchBar: ");
   console.log(u[1])
    this.productService.sendMessageSearch(`searchBar: ${this.search}`);
  }
  ngOnDestroy():void{
    this.subscriber.unsubscribe();
  }
}
