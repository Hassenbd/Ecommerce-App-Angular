import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public cartAddedSubject= new Subject<boolean>();

  cartId:any;

  getAllProducts():Observable<any[]>{
    debugger;
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
  }

  addToCart(obj:any):Observable<any>{
    debugger;
    return this.http.post<any>("https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart", obj);
  }

  getCartItemsByCustId(id:any):Observable<any[]>{
    return this.http.get<any>("https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id="+id) ;
  }

  removeCartItemsById(id:any):Observable<any[]>{
    return this.http.get<any>("https://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductFromCartById?id="+id) ;
  }

  makeSale(obj:any):Observable<any>{
    debugger;
    return this.http.post<any>("https://onlinetestapi.gerasim.in/api/Ecomm/AddNewSale", obj);
  }

}



