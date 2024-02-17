import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Shoe } from '../shoe';
import { OrderShoeService } from '../order-shoe.service';
import { OrderShoe } from '../orderShoe';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems: Shoe[] = [];
  newOrder: OrderShoe = {} as OrderShoe;

  constructor(private cartService: CartService, private orderService: OrderShoeService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  calculateTotalCost(){
    return this.cartItems.reduce((total, shoe) => total + shoe.price, 0);
  }

  completePurchase(orderForm: NgForm): void {
    if (orderForm.valid) {
      const shoesId = this.cartItems.map(item => item.id).join('|');
      this.newOrder.shoesId = shoesId;
      this.newOrder.totalCost = this.calculateTotalCost();
      this.orderService.addOrder(this.newOrder).subscribe(
        (addedOrder: OrderShoe) => {
          console.log('Order added successfully:', addedOrder);
          this.resetForm(orderForm);
          this.router.navigate(['/products'], { replaceUrl: true });
          this.cartService.clearCart();
        },
        (error:HttpErrorResponse) => {
          console.error('Error adding order:', error);
        }
      );
    } else {
      alert('Please complete all required fields before completing the purchase.');
    }
  }

  resetForm(orderForm: NgForm): void {
    orderForm.resetForm();
    this.newOrder = {} as OrderShoe;
  }

}
