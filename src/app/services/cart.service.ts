import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseURL:string = "http://localhost:3000/carts";
  
  constructor(private myClient: HttpClient) {
   }
   getUserCart(id){
    console.log( this.myClient.get(`${this.baseURL}/user/${id}`) )//{observe: 'body'} default // or {observe: 'response'}
    return this.myClient.get(`${this.baseURL}/user/${id}`);
   }
}
