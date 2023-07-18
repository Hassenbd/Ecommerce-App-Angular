import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';

const routes: Routes = [


  {path:'cart' , component:CartComponent},
  {path:'products' , component:HomeComponent},
  {path:'sale' , component:SaleComponent},
  {path:'**' , component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
