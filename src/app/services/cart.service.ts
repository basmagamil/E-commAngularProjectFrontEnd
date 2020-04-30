import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseURL:string = "http://localhost:3000/carts";
  
  constructor(private myClient: HttpClient) {
    console.log(this.userId)
   }
   userId = "5ea457ee4387c02984646e91";
   getUserCart(id){
     this.userId = id;
    console.log( this.myClient.get(`${this.baseURL}/user/${id}`) )//{observe: 'body'} default // or {observe: 'response'}
    return this.myClient.get(`${this.baseURL}/user/${id}`);
   }
  //  qtyInput;
   
   
   addProductToCart(prod, qtyInput){
     let temp = {
      userId: this.userId,
      productsList: [{
            productId: prod._id,
            quantity:qtyInput
        }]
    }
     return this.myClient.post(`${this.baseURL}/user/${this.userId}`, temp, {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       }),
       observe: 'body'
     });
   }

   deleteProductFromCart(prod){
     console.log(prod)
     return this.myClient.delete(`${this.baseURL}/user/${this.userId}/product/${prod}`);
   }

   checkoutFromCart(){
      return this.myClient.get(`${this.baseURL}/user/${this.userId}/checkout`);
   }
}
