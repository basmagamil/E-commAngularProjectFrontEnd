import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseURL = "http://localhost:3000/orders";

  constructor(private client:HttpClient) { }

  getOrders(){
    return this.client.get(`${this.baseURL}/`);
  }

  getOrder(id){
    // let headers = new HttpHeaders();
    // let token = localStorage.getItem('token');  
    // headers = headers.set('Authorization', 'Bearer ' + token);
    return this.client.get(`${this.baseURL}/user/${id}`);
  }
  addOrder(userId){
    // let payload = new HttpParams()
    // .set('user', order.user)
    // .set('date', order.date)
    // .set('price', order.price)
    // .set('status', order.status);
    // var i=0;
    // order.products.forEach(prodObj => {
    //   payload = payload.set(`products[${i}][product]`,prodObj.product);
    //   payload = payload.set(`products[${i}][quantity]`,prodObj.quantity);
    //   i++;
    // });
    // console.log("payload to be posted",payload);
    let payload = new HttpParams()
    .set('user',userId);
    return this.client.post(`${this.baseURL}`, payload);
  }
  deleteOrder(id){
    return this.client.delete(`${this.baseURL}/${id}`);
  }
  updateOrder(id, order){
    const payload = new HttpParams()
    .set('user', order.user)
    .set('date', order.date)
    .set('price', order.price)
    .set('status', order.status);
    var i=0;
    order.products.forEach(prodObj => {
      payload.set(`products[${i}][product]`,prodObj.product);
      payload.set(`products[${i}][quantity]`,prodObj.quantity);
      i++;
    });
    return this.client.patch(`${this.baseURL}/${id}`, payload);
  }
}
