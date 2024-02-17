import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Shoe } from '../shoe';
import { ShoeService } from '../shoe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  shoes: Shoe[] = [];
  availableSizes: number[] = [];
  availableColors: string[] = [];

  selectedSize: string = '';
  selectedColor: string = '';
  searchModel: string = '';

  isAddShoeDialogOpen: boolean = false;
  isEditShoeDialogOpen: boolean = false;
  newShoe: Shoe = {} as Shoe;
  editedShoe: Shoe = {} as Shoe;

  constructor(private shoeService: ShoeService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.getShoes();
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

  openAddShoeDialog(): void {
    this.isAddShoeDialogOpen = true;
  }

  closeAddShoeDialog(): void {
    this.isAddShoeDialogOpen = false;
  }

  openEditShoeDialog(shoe: Shoe, event: Event): void {
    event.stopPropagation();
    this.isEditShoeDialogOpen = true;
    this.editedShoe = { ...shoe };
  }

  closeEditShoeDialog(): void {
    this.isEditShoeDialogOpen = false;
  }

  isFormValid(): boolean {
    return (
      !!this.newShoe.model &&
      !!this.newShoe.details &&
      !!this.newShoe.size &&
      !!this.newShoe.color &&
      !!this.newShoe.price &&
      !!this.newShoe.imageUrl
    );
  }

  addShoe(): void {
    this.shoeService.addShoe(this.newShoe).subscribe(
      (response: Shoe) => {
        console.log('Shoe added:', response);
        this.getShoes();
        this.closeAddShoeDialog();
        this.newShoe = {} as Shoe; 
      },
      (error: HttpErrorResponse) => {
        alert('Failed to add shoe. ' + error.message);
      }
    );
  }

editProduct(editedShoe: Shoe): void {
  this.shoeService.updateShoe(editedShoe).subscribe(
    (response: Shoe) => {
      console.log('Shoe edited:', response);
      this.getShoes();
      this.closeEditShoeDialog();
      this.editedShoe = {} as Shoe;
    },
    (error: HttpErrorResponse) => {
      alert('Failed to edit shoe. ' + error.message);
    }
  );
}
  
  deleteProduct(shoe: Shoe, event: Event): void {
    event.stopPropagation();
    const confirmDelete = confirm('Are you sure you want to delete this shoe?');
    if (confirmDelete) {
      this.shoeService.deleteShoe(shoe.id).subscribe(
        () => {
          console.log('Shoe deleted:', shoe);
          this.getShoes(); 
        },
        (error: HttpErrorResponse) => {
          alert('Failed to delete shoe. ' + error.message);
        }
      );
    }
  }

  increaseQuantity(shoe: Shoe, event:Event): void{
    event.stopPropagation();
    var newQuantity:number;
    newQuantity = shoe.quantity + 1;
    this.shoeService.updateQuantity(shoe.id, newQuantity).subscribe(
      (respone: Shoe) => {
        console.log('Quantity increased');
        this.getShoes();
      },
      (error: HttpErrorResponse) =>{
        alert("Quantity problem on increase!");
      }
    )
  }

  decreaseQuantity(shoe: Shoe, event:Event): void{
    event.stopPropagation();
    var newQuantity:number = 0;
    if (shoe.quantity > 0)
      newQuantity = shoe.quantity - 1;
    this.shoeService.updateQuantity(shoe.id, newQuantity).subscribe(
      (respone: Shoe) => {
        console.log('Quantity decreased!');
        this.getShoes();
      },
      (error:HttpErrorResponse) =>{
        alert("Quantity problem on decrease!");
      }
    )
  }

  get filteredShoes(): Shoe[] {
    return this.shoes.filter((shoe) => {
      const sizeMatch = !this.selectedSize || shoe.size === Number(this.selectedSize);
      const colorMatch = !this.selectedColor || shoe.color === this.selectedColor;
      const modelMatch = !this.searchModel || shoe.model.toLowerCase().includes(this.searchModel.toLowerCase());

      return sizeMatch && colorMatch && modelMatch;
    });
  }

  navigateToCheckOrders(): void {
    this.router.navigate(['/check-orders']);
  }

}
