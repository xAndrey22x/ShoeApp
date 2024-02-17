import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckOrdersComponent } from './check-orders/check-orders.component';

const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingPageComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'admin', component: AdminComponent},
    { path: 'checkout', component: CheckoutComponent},
    { path: 'check-orders', component: CheckOrdersComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
