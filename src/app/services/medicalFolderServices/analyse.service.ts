import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Analyse } from 'src/app/models/MedicalFolder/analyse';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient,
    private _userService: UserService) { }

  authenticatedUser: User = this._userService.authenticatedUser;

  save(analyse: Analyse) {
    return this._http.post(this.baseUrl + `user/${this.authenticatedUser.id}/dossier-medical/analyse/new`, analyse);
  }
  findAll() {
    return this._http.get<Analyse[]>(this.baseUrl + `user/${this.authenticatedUser.id}/dossier-medical/analyse/find-all`);
  }
  delete(id : any) {
    return this._http.delete(this.baseUrl + `user/dossier-medical/analyse/${id}`);
  }
}
