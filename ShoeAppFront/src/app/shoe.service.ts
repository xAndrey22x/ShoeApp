import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Shoe } from './shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getShoes(): Observable<Shoe[]>{
    return this.http.get<Shoe[]>(`${this.apiServerUrl}/shoe/all`);
  }

  public getShoeById(id: number): Observable<Shoe>{
    return this.http.get<Shoe>(`${this.apiServerUrl}/shoe/find/${id}`);
  }

  public addShoe(shoe: Shoe): Observable<Shoe>{
    return this.http.post<Shoe>(`${this.apiServerUrl}/shoe/add`, shoe);
  }

  public updateShoe(shoe: Shoe): Observable<Shoe>{
    return this.http.put<Shoe>(`${this.apiServerUrl}/shoe/update`, shoe);
  }

  public deleteShoe(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/shoe/delete/${id}`);
  }

  public updateQuantity(id: number, newQuantity: number): Observable<Shoe>{
    return this.http.put<Shoe>(`${this.apiServerUrl}/shoe/updateQuantity/${id}`, {newQuantity})
  }

}
