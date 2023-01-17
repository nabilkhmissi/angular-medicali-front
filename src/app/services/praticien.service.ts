import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Praticien } from '../models/Praticien';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {

  constructor(private _http: HttpClient) { }
  baseUrl = environment.baseUrl;


  validatePraticien(id: any) {
    return this._http.get(this.baseUrl + `praticien/validate/${id}`)
  }

  findAll() {
    return this._http.get<Praticien[]>(this.baseUrl + "praticien/find-all")
  }

  findUnvalid() {
    return this._http.get<Praticien[]>(this.baseUrl + `praticien/find-unvalid`)
  }

  delete(id: any) {
    return this._http.delete(this.baseUrl + `praticien/delete/${id}`)
  }

}
