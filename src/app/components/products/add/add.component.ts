import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators,ValidatorFn, AbstractControl} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Location } from '@angular/common'
import { NavbarService } from 'src/app/services/navbar.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productsService:ProductsService, private location:Location, public navService:NavbarService) {
    
  }
  AddProductForm = new FormGroup({
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
    ratioOfPromotion:new FormControl('',[Validators.pattern("^(?:0*(?:\.\d+)?|1(\.0*)?)$")])
      //(0(\.[0-9]{1,4})?|1$
  })

  get title() { return this.AddProductForm.get('title'); }
  get price() { return this.AddProductForm.get('price'); }
  get quantity() { return this.AddProductForm.get('quantity'); }
  get promotion() { return this.AddProductForm.get('ratioOfPromotion'); }

  // productId
  ngOnInit(): void {
    this.navService.show();
    // this.productId=this.activatedRoute.snapshot.paramMap.get('id');
  }
//   product={
//     id:new String(),
//     title: new String(),
//     ImagesList:new Array(),
//     price: new Number(),
//     details:
//     {
//       brand: new String(),
//       processor: new String(),
//       ram: new String(),
//       hardDisk: new String(),
//       graphicsCard:new String(),
//       color: new String()
//     },
//     quantity:new Number() ,
//     promotion:new Number() 
// }
SuccesOrNoToUpdate;
FileChange(event)
  {
    for (let i=0;i<event.target.files.length;i++) {
      // this.product.ImagesList.push(event.target.files[i].name);
    }
  }
  onClickAddProductSubmit(){
    console.log(this.AddProductForm.value)
    console.log(this.AddProductForm)
    if(this.AddProductForm.valid){
      let addProduct = this.AddProductForm.value;
      if(this.promotion.value){
        addProduct.isPromoted=true;
      }
      else{
        addProduct.isPromoted=false;
      }
      this.AddProduct(addProduct);
      this.location.back();
    }
  }
  subscriber;
  AddProduct(addProduct) {
    this.subscriber = this.productsService.addProduct(addProduct).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }



}
