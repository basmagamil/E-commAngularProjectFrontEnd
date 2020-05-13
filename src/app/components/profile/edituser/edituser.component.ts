import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private usersService: UsersService, public router:Router) {
    // this.id = "5ea33e292b361551e0d428fb";
    // this.getUser();

  }
  // @Input() public test;
  @Input() public user;
  id;

  // getCurrentUser(id){
  //   this.subscriber = this.usersService.getUser(id).subscribe(
  //     user => {
  //       this.user = user;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

  ngOnInit(): void {
    this.updateInfoForm = new FormGroup({
      userName: new FormControl(this.user.userName, Validators.required),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      password: new FormControl(),
      gender: new FormControl(this.user.gender, Validators.required),
      // image: new FormControl(this.user.image, Validators.required),
    })
    // console.log(this.user._id)
    this.id = this.user._id;
  }
  
  // id = "5ea33e292b361551e0d428fb";
  // user;
  subscriber;

  // getUser(){
  //   this.subscriber = this.usersService.getUser(this.user._id).subscribe(
  //     user=>{
  //       this.user = user;
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   )
  // }

  // user = {
  //   id: "5ea33e292b361551e0d428fb",
  //   userName: "test",
  //   email: "test@gmail.com",
  //   password: "test",
  //   gender: "female",
  //   image: "assets/images/profilepics/defaultfemale.jpeg",
  //   orders: [
  //     {
  //       user: "5e9f3767a44da6767f00bd9f",
  //       date: "11-3-2020",
  //       price: 500,
  //       products: [
  //         {
  //           product: "5e9f3767a44da6767f00bd9f",
  //           quantity: 5,
  //           isDeleted: false
  //         },
  //         {
  //           product: "5e9f3767a44da6767f00bda0",
  //           quantity: 10,
  //           isDeleted: true
  //         }
  //       ],
  //       status: "pending"
  //     },
  //     {
  //       user: "5e9f3767a44da6767f00bd9f",
  //       date: "9-3-2020",
  //       price: 5200,
  //       products: [
  //         {
  //           product: "5e9f3767a44da6767f00bd9f",
  //           quantity: 7,
  //           isDeleted: false
  //         },
  //         {
  //           product: "5e9f3767a44da6767f00bda0",
  //           quantity: 8,
  //           isDeleted: true
  //         }
  //       ],
  //       status: "accepted"
  //     },
  //   ]
  // }

  updateInfoForm;


  get userName() {
    return this.updateInfoForm.get('userName');
  }
  get email() {
    return this.updateInfoForm.get('email');
  }
  get password() {
    return this.updateInfoForm.get('password');
  }
  get gender() {
    return this.updateInfoForm.get('gender');
  }
  // get image(){
  //   return this.updateInfoForm.get('image');
  // }

  


  onClickUpdateInfoSubmit(){
    // console.log("hey")
    if (this.updateInfoForm.valid) {
      // console.log("hey")
      let updatedUser = this.updateInfoForm.value;
      // console.log(this.user._id);
      
      this.updateUser(this.user._id, updatedUser);
      // console.log(this.user._id);
      // this.router.navigateByUrl(`/profile/${this.user._id}`);
      this.activeModal.close();
      location.reload();
      // this.activeModal.close(this.user);
    }
    else{
      this.updateInfoForm.markAllAsTouched();
    }
  }

  updateUser(id, updatedUser) {
    this.subscriber = this.usersService.updateUser(id, updatedUser).subscribe(
      res => {
        this.user = res;
        this.user._id=this.id;
        // console.log("res");
        console.log(res['token']);
        localStorage.setItem('token', res['token']);
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnDestroy():void{
    // this.subscriber.unsubscribe();
  }

}
