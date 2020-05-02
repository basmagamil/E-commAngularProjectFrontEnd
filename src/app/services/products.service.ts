import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { EmailValidator } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  baseURL = "http://localhost:3000/products";
  
  constructor(private client:HttpClient) { }

  getAllProducts(){
    return this.client.get(this.baseURL); //, {observe:'body'}
  }
  getSearchByBrand(BrandName){
    // let objSearchBrand= this.client.get(`${this.baseURL}//search/Brand?Brand=${BrandName}`);
    // console.log("observer")
    // console.log(objSearchBrand)
    // this._MessageSearch.next(objSearchBrand);
    // return objSearchBrand;
    //
    return this.client.get(`${this.baseURL}//search/Brand?Brand=${BrandName}`);
    //
    // const ProductBrand =this.client.get(`${this.baseURL}//search/Brand?Brand=${BrandName}`);
    // console.log(BrandName)
    // console.log(this.client.get(`${this.baseURL}//search/Brand?Brand=${BrandName}`))
    // this.$SearchBrand.emit(this.SeaechBrandList);
    // console.log(ProductBrand)
    // console.log("IS enter Here");
  }
  getSearchByProcessor(ProcessorName){
    return this.client.get(`${this.baseURL}//search/Processor?Processor=${ProcessorName}`);
  }
  getPromotedProducts(){
    return this.client.get(`${this.baseURL}/promoted`);
  }
  getProduct(id){
    return this.client.get(`${this.baseURL}/${id}`);
  }
  addProduct(product){
    const payload = new HttpParams()
    .set('title', product.title)
    .set('price', product.price)
    .set('details[Brand]', product.details.Brand)
    .set('details[Processor]', product.details.Processor)
    .set('details[RAM]', product.details.RAM)
    .set('details[HardDisk]', product.details.HardDisk)
    .set('details[GPU]', product.details.GPU)
    .set('details[Color]', product.details.Color)
    .set('ratioOfPromotion', product.ratioOfPromotion)
    .set('isPromoted', product.isPromoted)
    .set('quantity', product.quantity);
    var i = 0;
    product.images.forEach(img => {
      payload.set(`images[${i}]`, img);
      i++;
    });
    return this.client.post(`${this.baseURL}`, payload);
  }
  deleteProduct(id){
    return this.client.delete(`${this.baseURL}/${id}`);
  }
  updateProduct(id, product){
    const payload = new HttpParams()
    .set('title', product.title)
    .set('price', product.price)
    .set('details[Brand]', product.details.Brand)
    .set('details[Processor]', product.details.Processor)
    .set('details[RAM]', product.details.RAM)
    .set('details[HardDisk]', product.details.HardDisk)
    .set('details[GPU]', product.details.GPU)
    .set('details[Color]', product.details.Color)
    .set('ratioOfPromotion', product.ratioOfPromotion)
    .set('isPromoted', product.isPromoted)
    .set('quantity', product.quantity);
    var i = 0;
    product.images.forEach(img => {
      payload.set(`images[${i}]`, img);
      i++;
    });
    return this.client.patch(`${this.baseURL}/${id}`, payload);
  }
  //firstway
  private _MessageSearch=new Subject<string>();
  _MessageSearch$=this._MessageSearch.asObservable();
  sendMessageSearch(searchMessage:string)
  {
    this._MessageSearch.next(searchMessage);
  }

  //secondway
  $SearchBrand=new EventEmitter();
  SeaechBrandList:any[];
}
