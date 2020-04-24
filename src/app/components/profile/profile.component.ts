import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id;
  subscriber;
  user;
  constructor(activeRouterLink:ActivatedRoute, public router:Router, private usersService:UsersService) {
    this.id=activeRouterLink.snapshot.params.id;
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
  
  updateUser(user){
    this.subscriber = this.usersService.updateUser(this.id, user).subscribe(
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
