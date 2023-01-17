import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Veterinaire } from '../models/Veterinaire';

@Injectable({
  providedIn: 'root'
})
export class VeterinaireService {

  constructor(private _http: HttpClient) { }

  baseUrl = environment.baseUrl;

  public getHeader(): HttpHeaders {
    let requestHeader = new HttpHeaders();
    //requestHeader = requestHeader.append("Authorization","Bearer "+ sessionStorage.getItem('JwtToken'));
    requestHeader = requestHeader.append("Access-Control-Allow-Origin", "*");
    return requestHeader;
  }

  findVeterinairesBy(searchItem: any) {
    return this._http.post<Veterinaire[]>(this.baseUrl + `veterinaires/findBy`, searchItem);
  }

}
