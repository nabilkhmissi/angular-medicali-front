import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/Doctor';
import { Praticien } from '../models/Praticien';
import { PraticienDto } from '../models/PraticienDto';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private _http: HttpClient) { }

  baseUrl = environment.baseUrl + "doctor/";

  public getHeader(): HttpHeaders {
    let requestHeader = new HttpHeaders();
    //requestHeader = requestHeader.append("Authorization","Bearer "+ sessionStorage.getItem('JwtToken'));
    requestHeader = requestHeader.append("Access-Control-Allow-Origin", "*");
    return requestHeader;
  }


  findDoctorsBySpeciality(speciality: string) {
    return this._http.get<PraticienDto[]>(this.baseUrl + `speciality/${speciality}`)
  }

  findDoctorsBy(searchItem: any) {
    return this._http.post<Doctor[]>(this.baseUrl + "findBy", searchItem);
  }

  findRecent() {
    return this._http.get<Doctor[]>(this.baseUrl + "find-recent")
  }

  register(praticien: any) {
    return this._http.post(this.baseUrl + "save", praticien)
  }

  getById(id: any) {
    return this._http.get<Doctor>(this.baseUrl + `find-by-id/${id}`)
  }

  findUnvalid() {
    return this._http.get<Doctor[]>(this.baseUrl + `find-unvalid`)
  }

  validatePraticien(id: number) {
    return this._http.get(this.baseUrl + `validate/${id}`)
  }

  findAll() {
    return this._http.get<Doctor[]>(this.baseUrl + "find-all")
  }

  delete(id: any) {
    return this._http.delete(this.baseUrl + `delete/${id}`)
  }
}
