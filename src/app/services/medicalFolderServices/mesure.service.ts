import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesure } from 'src/app/models/MedicalFolder/Mesure';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class MesureService {

  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient,
    private _userService: UserService) { }

  authenticatedUser: User = this._userService.authenticatedUser;

  save(mesure: Mesure) {
    return this._http.post(this.baseUrl + `user/${this.authenticatedUser.id}/dossier-medical/mesure/new`, mesure);
  }
  findAll() {
    return this._http.get<Mesure[]>(this.baseUrl + `user/${this.authenticatedUser.id}/dossier-medical/mesures/find-all`);
  }
  delete(id: any) {
    return this._http.delete(this.baseUrl + `user/${this.authenticatedUser.id}/dossier-medical/mesure/delete/${id}`);
  }

  findNewest() {
    return this._http.get<Mesure>(this.baseUrl + `user/${this.authenticatedUser.id}/dossier-medical/mesure/find-new-one`);

  }
}
