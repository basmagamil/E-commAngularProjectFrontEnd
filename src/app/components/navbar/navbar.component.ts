import { Component, OnInit } from '@angular/core';
import { faSearch, faUser, faShoppingCart, faSignOutAlt, faSignInAlt, faGlobe, faAngleDown, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

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
  
  user={
    id: 5,
    userName: "Basma"
  }

  isCollapsed: boolean;

  constructor() {
    this.isCollapsed=true;
  }

  ngOnInit(): void {
  }

}
