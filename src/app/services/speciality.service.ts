import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Speciality } from '../models/Speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {


  baseUrl = environment.baseUrl;


  public getHeader(): HttpHeaders {
    let requestHeader = new HttpHeaders();
    //requestHeader = requestHeader.append("Authorization","Bearer "+ sessionStorage.getItem('JwtToken'));
    requestHeader = requestHeader.append("Access-Control-Allow-Origin", "*");
    return requestHeader;
  }

  constructor(private _http: HttpClient) { }

  /* specialities$ = this._http.get<Speciality[]>(this.baseUrl + "speciality/find-all"); */

  getAllSpecialities(): Observable<Speciality[]> {
    return this._http.get<Speciality[]>(this.baseUrl + "speciality/find-all");
  }

  delete(id: number) {
    return this._http.delete(this.baseUrl + `speciality/${id}`);
  }

  save(speciality: Speciality) {
    return this._http.post<Speciality>(this.baseUrl + "speciality/add", speciality);

  }


}
