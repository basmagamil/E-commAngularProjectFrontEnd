import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL = "http://localhost:3000/users";

  constructor(private client:HttpClient) { }
  
  getUser(id){
    return this.client.get(`${this.baseURL}/${id}`);
  }
  updateUser(id, user){
    return this.client.patch(`${this.baseURL}/${id}`, user);
  }
  deleteUser(id){
    return this.client.delete(`${this.baseURL}/${id}`);
  }
  registerUser(user){
    // return this.client.post(`${this.baseURL}/signup`, user);
    return this.client.post(`${this.baseURL}`, user);
  }
  loginUser(user){
    return this.client.post(`${this.baseURL}/login`, user);
  }

}
