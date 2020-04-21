import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() registerEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    username: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    gender:new FormControl(),
  })

  get usernameStatus(){
    return this.registerForm.controls.username.valid;
  }
  get emailStatus(){
    return this.registerForm.controls.email.valid;
  }
  get passwordStatus(){
    return this.registerForm.controls.password.valid;
  }

  onClickRegisterSubmit(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.registerEvent.emit(this.registerForm.value)
    }
  }

}
