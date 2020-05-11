import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-edituserphoto',
  templateUrl: './edituserphoto.component.html',
  styleUrls: ['./edituserphoto.component.css']
})
export class EdituserphotoComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private usersService: UsersService, public router:Router, public fb: FormBuilder) { 
    this.fileName = "Choose file";
  }
  
  @Input() public user;
  id;
  updateUserPhotoForm:FormGroup;
  subscriber;
  fileToUpload: File = null;
  fileName;

  ngOnInit(): void {
    console.log("photo modal init")
    this.updateUserPhotoForm = this.fb.group({
      image: ['']
    });
    this.id = this.user._id;
  }

  uploadFile(files: FileList) {
    this.fileName = "";
    this.fileToUpload = files.item(0);
    this.fileName = `${files.item(0).name}`;
  }

  onClickUpdateUserPhotoSubmit(){
    console.log(this.fileToUpload);
    this.updateUserPhoto(this.user._id, this.fileToUpload);
    this.activeModal.close();
    location.reload();
  }

  updateUserPhoto(id, updatedUserPhoto : File) {
    console.log("updateUserPhoto updatedUserPhoto", updatedUserPhoto)
    this.subscriber = this.usersService.uploadPhoto(id, updatedUserPhoto).subscribe(() =>
      res => {
        this.user = res;
        console.log(res);
        // this.user._id=this.id;
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
