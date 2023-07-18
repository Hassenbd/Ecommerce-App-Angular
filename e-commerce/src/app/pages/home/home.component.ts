import { Component ,OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  productList:any []=[];



  cartObj:any={
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-07-13T12:30:44.102Z"
  }



  constructor(private productsService:ProductService){}

  loadAllProducts(){
    debugger;
    this.productsService.getAllProducts().subscribe((res:any)=>{
        this.productList=res.data;
        console.log(this.productList);
      })
  }

  addItemToCart(prodId:number){
    debugger;
    this.cartObj.ProductId=prodId;

    this.productsService.addToCart(this.cartObj).subscribe(
      (result:any)=>{
        if(result.result){
          alert("Product Added To Cart");
          this.productsService.cartAddedSubject.next(true);
          console.log(result);
        }
      })



  }


  ngOnInit():void{
    debugger;
    this.loadAllProducts();
  }

}
