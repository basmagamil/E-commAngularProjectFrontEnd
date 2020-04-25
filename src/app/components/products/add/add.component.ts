import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators,ValidatorFn, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  UpdateProductForm = new FormGroup({
    title:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    brand:new FormControl(),
    processor:new FormControl(),
    ram:new FormControl(),
    hardDisk:new FormControl(),
    graphicsCard:new FormControl(),
    color:new FormControl(),
    quantity:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    promotion:new FormControl('',[Validators.pattern("^[0-9]*$")])
  })
  get titleStatus(){return this.UpdateProductForm.controls.title.valid}
  get imageStatus(){return this.UpdateProductForm.controls.image.valid}
  get priceStatus(){return this.UpdateProductForm.controls.price.valid}
  get quantityStatus(){return this.UpdateProductForm.controls.quantity.valid}
  productId
  ngOnInit(): void {
    this.productId=this.activatedRoute.snapshot.paramMap.get('id');
  }
  product={
    id:new String(),
    title: new String(),
    ImagesList:new Array(),
    price: new Number(),
    details:
    {
      brand: new String(),
      processor: new String(),
      ram: new String(),
      hardDisk: new String(),
      graphicsCard:new String(),
      color: new String()
    },
    quantity:new Number() ,
    promotion:new Number() 
}
SuccesOrNoToUpdate;
FileChange(event)
  {
    for (let i=0;i<event.target.files.length;i++) {
      this.product.ImagesList.push(event.target.files[i].name);
    }
  }
  UpdateProduct(){
    if(this.UpdateProductForm.valid){
      this.product.id=this.productId;
      this.product.title=this.UpdateProductForm.value.title;
      this.product.price=this.UpdateProductForm.value.price;
      this.product.details.brand=this.UpdateProductForm.value.brand;
      this.product.details.processor=this.UpdateProductForm.value.processor;
      this.product.details.ram=this.UpdateProductForm.value.ram;
      this.product.details.hardDisk=this.UpdateProductForm.value.hardDisk;
      this.product.details.graphicsCard=this.UpdateProductForm.value.graphicsCard;
      this.product.details.color=this.UpdateProductForm.value.color;
      this.product.quantity=this.UpdateProductForm.value.quantity;
      this.product.promotion=this.UpdateProductForm.value.promotion;
      console.log(this.UpdateProductForm.value);
      console.log(this.product);
      this.SuccesOrNoToUpdate="Add Success";
    }
    else
    this.SuccesOrNoToUpdate="You miss something";
  }

}
