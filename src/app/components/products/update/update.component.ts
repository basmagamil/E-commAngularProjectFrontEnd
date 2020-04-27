import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  UpdateProductForm:FormGroup;

  constructor(fb: FormBuilder, private router: Router, private productsService: ProductsService, private activeRouterLink:ActivatedRoute) {
    console.log("ctor")
    this.id=this.activeRouterLink.snapshot.params.id;
    console.log("id",this.id);
    this.UpdateProductForm = fb.group({
      title: fb.control('', [Validators.required]),
      image: fb.control(''),
      price: fb.control('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      brand: fb.control(''),
      processor: fb.control(''),
      ram: fb.control(''),
      hardDisk: fb.control(''),
      graphicsCard: fb.control(''),
      color: fb.control(''),
      quantity: fb.control('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      promotion: fb.control('0.5', [Validators.pattern("^[0-9]*$")])
      //(0(\.[0-9]{1,4})?|1$
    })

  }



  ngOnInit(): void {
    console.log("ngoninit")
    this.GetProduct(this.id);
    console.log("product",this.product)
    this.UpdateProductForm.reset({
      title: this.product.title,
      image:this.product.image,
      price: this.product.price,
      brand: this.product.details.Brand,
      processor: this.product.details.Processor,
      ram: this.product.details.RAM,
      hardDisk: this.product.details.HardDisk,
      graphicsCard: this.product.details.GPU,
      color: this.product.details.Color,
      quantity: this.product.details.quantity,
      promotion: this.product.ratioOfPromotion
    })
    console.log("formgroup in oninit",this.UpdateProductForm);
  }

  get title() { return this.UpdateProductForm.get('title'); }
  get price() { return this.UpdateProductForm.get('price'); }
  get quantity() { return this.UpdateProductForm.get('quantity'); }
  get promotion() { return this.UpdateProductForm.get('promotion'); }

  //   product={
  //     title: new String(),
  //     ImagesList:new Array(),
  //     price: new Number(),
  //     details:
  //     {
  //       Brand: new String(),
  //       Processor: new String(),
  //       RAM: new String(),
  //       HardDisk: new String(),
  //       GPU:new String(),
  //       Color: new String()
  //     },
  //     quantity:new Number() ,
  //     promotion:new Number() 
  // }
  
  id;
  updatedProduct;
  subscriber;
  SuccesOrNoToUpdate;
  product;
  FileChange(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.updatedProduct.ImagesList.push(event.target.files[i].name);
    }
  }
  onClickUpdateProductSubmit() {
    if (this.UpdateProductForm.valid) {
      let updatedProduct = this.UpdateProductForm.value;
      this.UpdateProduct(this.product._id, updatedProduct)
      this.router.navigate(['../']);
    }
  }
  UpdateProduct(id, updatedProduct) {
    this.subscriber = this.productsService.updateProduct(id, updatedProduct).subscribe(
      res => {
        this.updatedProduct = res;
      },
      err => {
        console.log(err);
      }
    )
  }
  GetProduct(id) {
    console.log("getting product")
    this.subscriber = this.productsService.getProduct(id).subscribe(
      res => {
        console.log("success")
        this.product = res[0];
        // this.user._id=this.id;
        console.log(this.product);
      },
      err => {
        console.log("fail")

        console.log(err);
      }
    )
  }
}
