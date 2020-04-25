import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  baseURL = "http://localhost:3000/products";
  
  constructor(private client:HttpClient) { }

  getAllProducts(){
    return this.client.get(this.baseURL); //, {observe:'body'}
  }
  // TODO
  // getSearchedProducts(){

  // }
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
}
