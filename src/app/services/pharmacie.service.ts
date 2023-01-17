import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pharmacie } from '../models/Pharmacie';

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

  constructor(private _http: HttpClient) { }

  baseUrl = environment.baseUrl;

  findBy(searchItem: any) {
    return this._http.post<Pharmacie[]>(this.baseUrl + "pharmacie/findBy", searchItem);
  }

  findAll() {
    return this._http.get<Pharmacie[]>(this.baseUrl + "pharmacie/find-all");
  }

  delete(id: any) {
    return this._http.post(this.baseUrl + "pharmacie/delete", id);
  }

  register(pharmacie: any) {
    return this._http.post(this.baseUrl + "pharmacie/save", pharmacie);
  }
}
