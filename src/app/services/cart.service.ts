import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseURL: string = 'http://localhost:3000/carts';

  constructor(
    private myClient: HttpClient,
    private usersService: UsersService
  ) {
    console.log(this.userId);
  }
  userId = this.usersService.currentUser.id;
  getUserCart(id) {
    this.userId = id;
    console.log(this.myClient.get(`${this.baseURL}/user/${id}`)); //{observe: 'body'} default // or {observe: 'response'}
    return this.myClient.get(`${this.baseURL}/user/${id}`);
  }
  //  qtyInput;

  addProductToCart(prod, qtyInput) {
    let temp = {
      userId: this.userId,
      productsList: [
        {
          productId: prod._id,
          quantity: qtyInput,
        },
      ],
    };
    const payload = new HttpParams()
    .set('userId', temp.userId)
    .set('productsList[0][productId]', temp.productsList[0].productId)
    .set('productsList[0][quantity]', temp.productsList[0].quantity);
    return this.myClient.post(`${this.baseURL}/user/${this.userId}`, payload);
    // return this.myClient.post(`${this.baseURL}/user/${this.userId}`, temp, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    //   observe: 'body',
    // });
  }

  deleteProductFromCart(prod) {
    console.log(prod);
    return this.myClient.delete(
      `${this.baseURL}/user/${this.userId}/product/${prod}`
    );
  }

  checkoutFromCart() {
    return this.myClient.get(`${this.baseURL}/user/${this.userId}/checkout`);
  }
}
