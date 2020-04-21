import { Component, OnInit } from '@angular/core';
import { faSearch, faUser, faShoppingCart, faSignOutAlt, faSignInAlt, faGlobe, faAngleDown, faShoppingBag, faClipboardList } from '@fortawesome/free-solid-svg-icons';

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
  
  user={
    id: "5e9f37a4a44da6767f00bda7",
    userName: "Basma"
  }

  isCollapsed: boolean;

  constructor() {
    this.isCollapsed=true;
  }

  ngOnInit(): void {
  }

}
