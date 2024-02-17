import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShoeService } from './shoe.service';
import { ProductsComponent } from './products/products.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckOrdersComponent } from './check-orders/check-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LandingPageComponent,
    AdminComponent,
    ImageSliderComponent,
    CheckoutComponent,
    CheckOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [ShoeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
