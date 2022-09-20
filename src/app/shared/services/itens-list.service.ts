import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { itens_List } from '../models/itens_lista.model';
@Injectable({
  providedIn: 'root'
})
export class ItensListService {

  baseURL = 'http://localhost:3001/itens_Lista'

  constructor( private http: HttpClient) { }

  getAll():Observable<itens_List[]>{
    return this.http.get<itens_List[]>(this.baseURL);
  }

}
