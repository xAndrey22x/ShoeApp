import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { OrderShoe } from './orderShoe';

@Injectable({
  providedIn: 'root'
})
export class OrderShoeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<OrderShoe[]>{
    return this.http.get<OrderShoe[]>(`${this.apiServerUrl}/order/all`)
  }

  public addOrder(orderShoe: OrderShoe): Observable<OrderShoe>{
    return this.http.post<OrderShoe>(`${this.apiServerUrl}/order/add`, orderShoe);
  }

  public deleteOrder(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/order/delete/${id}`);
  }


}
