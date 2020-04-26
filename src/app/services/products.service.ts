import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.client.post(`${this.baseURL}`, product);
  }
  deleteProduct(id){
    return this.client.delete(`${this.baseURL}/${id}`);
  }
  updateProduct(id, product){
    return this.client.patch(`${this.baseURL}/${id}`, product);
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
