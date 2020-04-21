import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  baseURL = "http://localhost:3000/products";
  
  constructor(private myClient:HttpClient) { }

  getAllProducts(){
    return this.myClient.get(this.baseURL, {observe:'body'});
  }
  // TODO
  // getSearchedProducts(){

  // }
  getPromotedProducts(){
    console.log("hey from service")
    console.log(this.baseURL);
    console.log(`${this.baseURL}/promoted`)
    return this.myClient.get(`${this.baseURL}/promoted`, {observe:'body'});
  }
  getProduct(id){
    return this.myClient.get(`${this.baseURL}/${id}`);
  }
  addProduct(product){
    return this.myClient.post(`${this.baseURL}`, product);
  }
  deleteProduct(id){
    return this.myClient.delete(`${this.baseURL}/${id}`);
  }
  updateProduct(id, product){
    return this.myClient.patch(`${this.baseURL}/${id}`, product);
  }
}
