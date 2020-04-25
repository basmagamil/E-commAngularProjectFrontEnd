import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EdituserComponent } from './edituser/edituser.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id;
  subscriber;
  user;

  // orders=[{
  //   date: 11-3-2020,
  //   price: 5000,
  //   products: [],
  //   status: "pending"
  // }]


  constructor(activeRouterLink:ActivatedRoute, public router:Router, private usersService:UsersService, private modalService: NgbModal) {
    this.id=activeRouterLink.snapshot.params.id;
    // this.getUser();
  }

  ngOnInit(): void {
    this.getUser();
  }

  onClickEditInfoModal(){
    // console.log(this.user)
    const modalRef = this.modalService.open(EdituserComponent);
    modalRef.componentInstance.user = this.user;
    // modalRef.componentInstance.test = "heyy";
    // modalRef.result.then((result) => {
    //   if (result) {
    //    this.user=result;
    //   }
    //   });
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
    // this.subscriber.unsubscribe();
  }
}
