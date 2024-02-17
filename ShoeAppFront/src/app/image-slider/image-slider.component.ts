import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  currentIndex: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { images: string[] },
    public dialogRef: MatDialogRef<ImageSliderComponent>
  ) {}

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.data.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.data.images.length) % this.data.images.length;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}