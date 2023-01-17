import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RDV } from '../models/RDV';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  save(rdv: any) {
    return this._http.post(this.baseUrl + "rdv/new", rdv)
  }

  findByUserId(id: any) {
    return this._http.get<RDV[]>(this.baseUrl + `rdv/find-by-user-id/${id}`);
  }

  findByDoctorId(id: any) {
    return this._http.get<RDV[]>(this.baseUrl + `rdv/find-by-doctor-id/${id}`);
  }

  validateRDV(id:any){
    return this._http.get<RDV[]>(this.baseUrl + `rdv/validate-by-id/${id}`);
  }

  annulerRDV(id:any){
    return this._http.delete(this.baseUrl + `rdv/delete/${id}`);
  }
}
