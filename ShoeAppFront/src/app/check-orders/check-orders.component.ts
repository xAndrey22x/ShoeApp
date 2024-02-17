import { Component } from '@angular/core';
import { OrderShoe } from '../orderShoe';
import { OrderShoeService } from '../order-shoe.service';
import { ShoeService } from '../shoe.service';
import { Shoe } from '../shoe';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-check-orders',
  templateUrl: './check-orders.component.html',
  styleUrls: ['./check-orders.component.css']
})
export class CheckOrdersComponent {
  orders: OrderShoe[] = [];
  shoesDetails: Map<number, Shoe> = new Map<number, Shoe>();

  constructor(private orderService: OrderShoeService, private shoeService: ShoeService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe(
      (orders: OrderShoe[]) => {
        this.orders = orders;
        this.loadShoeDetails();
      },
      (error) => {
        console.error('Error loading orders:', error);
      }
    );
  }

  loadShoeDetails(): void {
    const uniqueShoeIds = Array.from(new Set(this.orders.flatMap(order => order.shoesId.split('|').map(Number))));
    
    uniqueShoeIds.forEach(shoeId => {
      this.shoeService.getShoeById(shoeId).subscribe(
        (shoe: Shoe) => {
          this.shoesDetails.set(shoeId, shoe);
        },
        (error) => {
          console.error(`Error loading details for shoe ID ${shoeId}:`, error);
        }
      );
    });
  }

  getShoeDetails(shoeId: string): any {
    const shoe = this.shoesDetails.get(parseInt(shoeId, 10));
    return shoe ? {
      model: shoe.model,
      details: shoe.details,
      size: shoe.size,
      color: shoe.color,
      price: shoe.price.toFixed(2),
      imageUrl: shoe.imageUrl
    } : null;
  }

  completeOrder(orderId: number){
    this.orderService.deleteOrder(orderId).subscribe(
      () => {
        console.log(`Order with ID ${orderId} completed successfully.`);
        this.loadOrders();
      },
      (error:HttpErrorResponse) => {
        console.error(`Error completing order with ID ${orderId}:`, error);
      }
    );
  }

  cancelOrder(orderId: number){
    this.orderService.deleteOrder(orderId).subscribe(
      () => {
        console.log(`Order with ID ${orderId} canceled successfully.`);
        this.loadOrders();
        const uniqueShoeIds = Array.from(new Set(this.orders.flatMap(order => order.shoesId.split('|').map(Number))));
        uniqueShoeIds.forEach(shoeId =>{
          this.shoeService.getShoeById(shoeId).subscribe(
            (response: Shoe) => {
              this.shoeService.updateQuantity(shoeId, (response.quantity + 1)).subscribe(
                (response1:Shoe) =>{
                  
                },
                (error:HttpErrorResponse) =>{
                  console.log(`Error updating quantity for the shoe with ID ${shoeId}:`, error);
                }
              )
            },
            (error:HttpErrorResponse) => {
              console.log(`Error finding the shoe with ID ${shoeId}:`, error);
            }
          )
        })
      },
      (error:HttpErrorResponse) => {
        console.log(`Error canceling order with ID ${orderId}:`, error);
      }
    )
  }

}
