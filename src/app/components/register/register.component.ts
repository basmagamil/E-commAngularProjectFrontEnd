import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() registerEvent = new EventEmitter();

  constructor(public router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    password: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  })

  get userName() {
    return this.registerForm.get('userName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get gender() {
    return this.registerForm.get('gender');
  }

  subscriber;

  onClickRegisterSubmit() {
    if (this.registerForm.valid) {
      let user = this.registerForm.value;
      this.registerEvent.emit(user);
      this.registerUser(user);
      this.router.navigateByUrl('');
    }
  }

  registerUser(user) {
    this.subscriber = this.usersService.registerUser(user).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnDestroy(): void {
    // this.subscriber.unsubscribe(); TODO: when to unsubscribe?
  }

}
