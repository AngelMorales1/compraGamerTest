import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = new BehaviorSubject<Product[]>([])
  public cartItems$ = this.cart.asObservable();
  constructor() { }

  addProdToCart(prod:Product){
    const currentCart = this.cart.getValue();

    this.cart.next( [...currentCart, prod]);
  }
}
