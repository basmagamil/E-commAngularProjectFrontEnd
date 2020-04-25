import { Component, OnInit } from '@angular/core';
import { faSearch, faUser, faShoppingCart, faSignOutAlt, faSignInAlt, faGlobe, faAngleDown, faShoppingBag, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/services/users.service';

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

  constructor(private usersService:UsersService) {
    this.isCollapsed=true;
    this.id = "5ea33e292b361551e0d428fb";
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

  ngOnDestroy():void{
    this.subscriber.unsubscribe();
  }
}
