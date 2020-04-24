import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter();

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email:new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    password:new FormControl('',Validators.required),
    remember:new FormControl(false)
  })

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  onClickLoginSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.loginEvent.emit(this.loginForm.value);
      this.router.navigateByUrl('');
    }
  }

}
