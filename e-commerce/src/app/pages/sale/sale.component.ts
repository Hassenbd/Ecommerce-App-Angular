import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit{

  cartProducts:any[]=[];
  subTotal:number=0;

  saleObj:any={
    "SaleId": 0,
    "CustId": 1,
    "SaleDate": new Date(),
    "TotalInvoiceAmount": 0,
    "Discount": 0,
    "PaymentNaration": "string",
    "DeliveryAddress1": "string",
    "DeliveryAddress2": "string",
    "DeliveryCity": "string",
    "DeliveryPinCode": "string",
    "DeliveryLandMark": "string"
  }

  constructor(private productService: ProductService){
    debugger;
  }


ngOnInit(): void {
    this.loadCart();
}

  loadCart(){
    this.subTotal=0;
    this.productService.getCartItemsByCustId(1).subscribe(
      (res:any)=>{
        this.cartProducts=res.data;
        debugger;
        this.cartProducts.forEach(ele=>{
          this.subTotal+=ele.productPrice;
        })
      }
    )
  }

  RemoveItem(id:number){
    this.productService.removeCartItemsById(id).subscribe(
      (res:any)=>{
        if(res.result){
          this.loadCart();
          this.productService.cartAddedSubject.next(true);

        }
      })
  }

  MakeSale(){
    this.saleObj.TotalInvoiceAmount=this.subTotal;
    this.productService.cartAddedSubject.next(true);

    this.productService.makeSale(this.saleObj).subscribe(
      (res:any)=>{
        if(res.result){
          alert("Sale Success");
          this.loadCart();
          this.productService.cartAddedSubject.next(true);

        }
      })
  }

}
