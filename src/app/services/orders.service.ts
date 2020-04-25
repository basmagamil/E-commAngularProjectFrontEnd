import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.client.get(`${this.baseURL}/user/${id}`);
  }
  addOrder(order){
    return this.client.post(`${this.baseURL}`, order);
  }
  deleteOrder(id){
    return this.client.delete(`${this.baseURL}/${id}`);
  }
  updateOrder(id, order){
    return this.client.patch(`${this.baseURL}/${id}`, order);
  }
}
