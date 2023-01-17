import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Laboratoire } from '../models/Laboratoire';

@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {

  baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) { }

  findLaboratoiresBy(searchItem: any) {
    return this._http.post<Laboratoire[]>(this.baseUrl + `laboratoires/findBy`, searchItem);
  }

  findAll() {
    return this._http.get<Laboratoire[]>(this.baseUrl + "laboratoires/find-all");
  }

  delete(id: any) {
    return this._http.delete(this.baseUrl + `laboratoires/delete/${id}`);
  }

  register(labo: any) {
    return this._http.post(this.baseUrl + `laboratoires/save`, labo);
  }
}
