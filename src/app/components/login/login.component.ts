import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email:new FormControl('b',Validators.required),
    password:new FormControl('b',Validators.required),
  })

  get emailStatus(){
    return this.loginForm.controls.email.valid;
  }
  get passwordStatus(){
    return this.loginForm.controls.password.valid;
  }

  onClickLoginSubmit(){
    // console.log(this.registerationForm);
    if(this.loginForm.valid){
      this.loginEvent.emit(this.loginForm.value)
    }
  }

}
