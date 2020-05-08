import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL = "http://localhost:3000/users";

  constructor(private client:HttpClient) { }

  getAllUsers(){
    return this.client.get(`${this.baseURL}`);
  }
  
  getUser(id){
    // let headers = new HttpHeaders();
    // let token = localStorage.getItem('token');  
    // headers = headers.set('Authorization', 'Bearer ' + token);
    return this.client.get(`${this.baseURL}/${id}`);
  }
  updateUser(id, user){
    const payload = new HttpParams()
    .set('userName', user.userName)
    .set('email', user.email)
    .set('password', user.password)
    .set('gender', user.gender)
    .set('image', user.image);
    return this.client.patch(`${this.baseURL}/${id}`, payload);
  }
  deleteUser(id){
    return this.client.delete(`${this.baseURL}/${id}`);
  }
  registerUser(user){
    const payload = new HttpParams()
    .set('userName', user.userName)
    .set('email', user.email)
    .set('password', user.password)
    .set('gender', user.gender)
    .set('image', user.image);
    return this.client.post(`${this.baseURL}/signup`, payload);
    // return this.client.post(`${this.baseURL}`, user);
  }
  loginUser(user){
    const payload = new HttpParams()
    .set('email', user.email)
    .set('password', user.password);
    return this.client.post(`${this.baseURL}/login`, payload);
  }
  logout(){
    localStorage.removeItem('token');
  }
  isLoggedIn(){
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if(!token)  
      return false;  
    let expirationDate = jwtHelper.getTokenExpirationDate(token);  
    let isExpired = jwtHelper.isTokenExpired(token);  
    return !isExpired;
  }
  get currentUser() {  
    let token = localStorage.getItem('token');
    if(!token)
      return null;
    return new JwtHelperService().decodeToken(token).user;
  }
}
