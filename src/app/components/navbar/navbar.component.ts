import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faUser,
  faShoppingCart,
  faSignOutAlt,
  faSignInAlt,
  faGlobe,
  faAngleDown,
  faShoppingBag,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
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

  constructor(
    public usersService: UsersService,
    private productService: ProductsService,
    private router: Router,
    public navService: NavbarService
  ) {
    this.isCollapsed = true;
    // this.id = usersService.currentUser.id;
    // this.id = '5ea33e292b361551e0d428fb'; //basma
    // this.id = "5ea457ee4387c02984646e91"; //rawan
    // this.id = "5ea464c3b4ec50572cccc954"; //azhar
  }

  ngOnInit(): void {
    // this.getUser();
    console.log(this.usersService.currentUser);
  }

  getUser() {
    this.subscriber = this.usersService.getUser(this.id).subscribe(
      (user) => {
        this.user = user;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  SearchOnHPLaptop() {
    this.productService.sendMessageSearch('HP');
  }
  SearchOnLenovoLaptop() {
    this.productService.sendMessageSearch('Lenovo');
  }
  SearchOnDellLaptop() {
    this.productService.sendMessageSearch('Dell');
  }
  SearchOnLaptopCore_i3() {
    this.productService.sendMessageSearch('Core i3');
  }
  SearchOnLaptopCore_i5() {
    this.productService.sendMessageSearch('Core i5');
  }
  SearchOnLaptopCore_i7() {
    this.productService.sendMessageSearch('Core i7');
  }
  SearchOnLaptopCore_i9() {
    this.productService.sendMessageSearch('Core i9');
  }
  SearchOnAllLaptop() {
    this.router.navigate(['../products']);
    this.productService.sendMessageSearch('All Laptop');
  }
  search: string;
  GeneralSearch() {
    console.log(`search ${this.search}`);
    
    this.productService.sendMessageSearch(`searchBar: ${this.search}`);
  }
  GoToAllProduct() {
    this.router.navigate(['../products']);
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
  onClickLogout(){
    this.usersService.logout();
    //location.reload();
  }
}
