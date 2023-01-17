import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DossierMedical } from 'src/app/models/DossierMedical';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalService {

  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient,
    private _userService: UserService) { }


  getDossierMedical() {
    return this._http.get<DossierMedical>(this.baseUrl + `user/${this._userService.authenticatedUser.id}/dossier-medical/find`)
  }

  getDossierMedicalByPatientId(id: any) {
    return this._http.get<DossierMedical>(this.baseUrl + `user/${id}/dossier-medical/findByPatientId`)
  }
}
