import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service';
import { Shoe } from '../shoe';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  shoes: Shoe[] = [];
  availableSizes: number[] = [];
  availableColors: string[] = [];

  selectedSize: string = '';
  selectedColor: string = '';
  searchModel: string = '';

  isCartPanelOpen: boolean = false;
  cartItems: Shoe[] = [];

  constructor(private shoeService: ShoeService, private dialog: MatDialog, private cartService: CartService) {}

   private loadCartItemsFromSessionStorage(): void {
    this.cartItems = this.cartService.getCartItems();
  }


  ngOnInit(): void {
    this.getShoes();
    this.loadCartItemsFromSessionStorage();
  }

  getShoes(): void {
    this.shoeService.getShoes().subscribe(
      (response: Shoe[]) => {
        this.shoes = response;
        this.availableSizes = Array.from(new Set(this.shoes.map((shoe) => shoe.size)));
        this.availableColors = Array.from(new Set(this.shoes.map((shoe) => shoe.color)));
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  get filteredShoes(): Shoe[] {
    return this.shoes.filter((shoe) => {
      const sizeMatch = !this.selectedSize || shoe.size === Number(this.selectedSize);
      const colorMatch = !this.selectedColor || shoe.color === this.selectedColor;
      const modelMatch = !this.searchModel || shoe.model.toLowerCase().includes(this.searchModel.toLowerCase());
      const detailsMatch = !this.searchModel || shoe.details.toLowerCase().includes(this.searchModel.toLowerCase());
      const quantityAvailabe = shoe.quantity > 0;

      return sizeMatch && colorMatch && (modelMatch || detailsMatch) && quantityAvailabe;
    });
  }

  openImageSlider(shoe: Shoe): void {
    const dialogRef = this.dialog.open(ImageSliderComponent, {
      data: { images: [`assets/${shoe.imageUrl}`, `assets/${shoe.imageUrl2}`, `assets/${shoe.imageUrl3}`] }
    });
  }

  openCartPanel() {
    this.isCartPanelOpen = true;
  }

  closeCartPanel() {
    this.isCartPanelOpen = false;
  }

  addToCart(shoe: Shoe, event: Event){
    event.stopPropagation();
    
    const isDuplicate = this.cartItems.some(item => item.id === shoe.id);
    if (!isDuplicate) {
      this.shoeService.updateQuantity(shoe.id, shoe.quantity - 1).subscribe(() => {
        this.getShoes();
      });
      this.cartItems.push(shoe);
      this.cartService.setCartItems(this.cartItems);
    }
  }

  removeItem(index: number): void {
    const removedShoe = this.cartItems[index];
    this.shoeService.updateQuantity(removedShoe.id, removedShoe.quantity).subscribe(() => {
      this.getShoes();
    });
    this.cartItems.splice(index, 1);
    this.cartService.setCartItems(this.cartItems);
  }

}
