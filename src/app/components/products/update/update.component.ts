import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  filesToUpload = [];

  UpdateProductForm:FormGroup;

  constructor(fb: FormBuilder, private router: Router, private productsService: ProductsService, private activeRouterLink:ActivatedRoute, public navService:NavbarService, private _location: Location) {
    this.id=this.activeRouterLink.snapshot.params.id;
    this.fileName="Choose file";
  }

  get title() { return this.UpdateProductForm.get('title'); }
  get price() { return this.UpdateProductForm.get('price'); }
  get quantity() { return this.UpdateProductForm.get('quantity'); }
  get promotion() { return this.UpdateProductForm.get('ratioOfPromotion'); }

  ngOnInit(): void {
    this.navService.show();
    this.GetProduct(this.id);
    this.UpdateProductForm = new FormGroup({
      title:new FormControl('',[Validators.required]),
      images:new FormControl([]),
      price:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      details:new FormGroup({
        Brand:new FormControl(''),
        Processor:new FormControl(''),
        RAM:new FormControl(''),
        HardDisk:new FormControl(''),
        GPU:new FormControl(''),
        Color:new FormControl(''),
      }),
      quantity:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      ratioOfPromotion:new FormControl('',[Validators.required,Validators.pattern("^(?:0*(?:\\.\\d+)?|1(\\.0*)?)$")])
    })
  }
    uploadFiles(files: FileList) {
      this.fileName = "";
    for(var i =0; i<files.length; i++){
      this.filesToUpload.push(files.item(i));
      this.fileName = `${this.fileName} ${files.item(i).name}`;
    }}

  id;
  updatedProduct;
  subscriber;
  subscriber2;
  product;
  fileName;
  // FileChange(event) {
  //   for (let i = 0; i < event.target.files.length; i++) {
  //     this.updatedProduct.ImagesList.push(event.target.files[i].name);
  //   }
  // }
  onClickUpdateProductSubmit() {
    if (this.UpdateProductForm.valid) {
      let updatedProduct = this.UpdateProductForm.value;
      // if(this.promotion.value){
      //   updatedProduct.isPromoted=true;
      // }
      // else{
      //   updatedProduct.isPromoted=false;
      // }
      console.log(updatedProduct);
      this.UpdateProduct(this.product._id, updatedProduct, this.filesToUpload);
      // this.router.navigate(['../']);
      this._location.back();
      // location.reload();
    }
    else{
      console.log(this.UpdateProductForm)
      this.UpdateProductForm.markAllAsTouched();
    }
  }
  goBack(){
    this._location.back();
  }
  UpdateProduct(id, updatedProduct, files) {
    this.subscriber2 = this.productsService.updateProduct(id, updatedProduct, files).subscribe(
      res => {
        this.updatedProduct = res;
      },
      err => {
        console.log(err);
      }
    )
  }
  GetProduct(id) {
    this.subscriber = this.productsService.getProduct(id).subscribe(
      res => {
        this.product = res[0];
        this.filesToUpload = this.product.images;
        if(this.product.images && this.product.images.length){
          this.fileName ="";
          console.log(this.product.images)
          for(var j=0; j<this.product.images.length; j++){
            let fullname = this.product.images[j];
            let name = fullname.split("//")[1].split("/")[1];
            this.fileName = `${this.fileName} ${name}`; 
          }
        }
        else{
          this.fileName = "Choose file";
        }
        // this.user._id=this.id;
        console.log(this.product);
        this.UpdateProductForm.patchValue({title: this.product.title})
        // this.UpdateProductForm.patchValue({images: this.product.images})
        this.UpdateProductForm.patchValue({price: this.product.price})
        this.UpdateProductForm.patchValue({details: {
                                                    Brand: this.product.details.Brand,
                                                    Processor: this.product.details.Processor,
                                                    RAM: this.product.details.RAM,
                                                    HardDisk: this.product.details.HardDisk,
                                                    GPU: this.product.details.GPU,
                                                    Color: this.product.details.Color
                                                  }
                                          })
        this.UpdateProductForm.patchValue({ratioOfPromotion: this.product.ratioOfPromotion})
        this.UpdateProductForm.patchValue({quantity: this.product.quantity})
      },
      err => {
        console.log("fail")

        console.log(err);
      }
    )
  }
}
