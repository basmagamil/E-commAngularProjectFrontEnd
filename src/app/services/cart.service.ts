import { Injectable } from '@angular/core';
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
   addProductToCart(prod, qtyInput){
     let temp = {
      userId: this.userId,
      productsList: [{
            productId: prod._id,
            quantity:qtyInput
           
        }]
    }
     console.log(temp);
     console.log("service Done")
     return this.myClient.post(`${this.baseURL}/user/${this.userId}`, temp, {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       }),
       observe: 'body'
     });
   }
}
