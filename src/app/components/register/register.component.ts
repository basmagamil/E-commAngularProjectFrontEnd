import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() registerEvent = new EventEmitter();

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    username: new FormControl('',Validators.required),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    password:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
  })

  get username(){
    return this.registerForm.get('username');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get gender(){
    return this.registerForm.get('gender');
  }

  onClickRegisterSubmit(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.registerEvent.emit(this.registerForm.value)
      this.router.navigateByUrl('');
    }
  }

}
