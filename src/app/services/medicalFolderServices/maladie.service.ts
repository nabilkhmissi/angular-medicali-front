import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maladie } from 'src/app/models/MedicalFolder/Maladie';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class MaladieService {


  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient, private _userService: UserService) { }

  authenticatedUser = this._userService.authenticatedUser;

  findByUserId(userId : any) {
    return this._http.get<Maladie[]>(this.baseUrl + `user/${this.authenticatedUser.id}/dossier-medical/maladie/find-all`)
  }

  save(maladie: Maladie) {
    return this._http.post(this.baseUrl +`user/${this.authenticatedUser.id}/dossier-medical/maladie/new`, maladie)
  }


  delete(id: any) {
    return this._http.delete(this.baseUrl +`user/dossier-medical/maladie/${id}`)
  }

}
