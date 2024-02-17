import { Injectable } from '@angular/core';
import { Shoe } from './shoe';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Shoe[] = [];

  constructor() {
    this.retrieveCartItems();
  }

  getCartItems(): Shoe[] {
    return this.cartItems;
  }

  setCartItems(items: Shoe[]): void {
    this.cartItems = items;
    this.removeDuplicates();
    this.saveCartItems();
  }

  addToCart(item: Shoe): void {
    if (!this.cartItems.some((cartItem) => this.areItemsEqual(cartItem, item))) {
      this.cartItems.push(item);
      this.saveCartItems();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems();
  }

  private saveCartItems(): void {
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private retrieveCartItems(): void {
    const storedCartItems = sessionStorage.getItem('cartItems');
    this.cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
  }

  private removeDuplicates(): void {
    this.cartItems = this.cartItems.filter((item, index, self) => {
      return index === self.findIndex((i) => this.areItemsEqual(i, item));
    });
  }

  private areItemsEqual(item1: Shoe, item2: Shoe): boolean {
    return item1.id === item2.id;
  }

}
