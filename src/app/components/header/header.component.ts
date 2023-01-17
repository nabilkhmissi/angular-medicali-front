import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router,
    private _userService: UserService) { }

  authenticatedUser = this._userService.authenticatedUser;
  isUserLoggedIn = this._userService.isUserLoggedIn;
  user = this._userService.getAuthenticatedUser();

  ngOnInit(): void {

  }

  logout() {
    localStorage.removeItem("medicioLoggedUser")
    this._userService.isUserLoggedIn = false;
    this._userService.authenticatedUser = null;
    this._router.navigateByUrl('search-medecin', { skipLocationChange: true }).then(() => {
      this._router.navigate(['']);
    });
  }

  goToEditProfile() {
    if (this.user.role == "user") {
      this._router.navigate(['account/user'])
    }
    if (this.user.role == "praticien") {
      this._router.navigate(['account/praticien'])
    }
    if (this.user.role == "admin") {
      this._router.navigate(['account/admin'])
    }
  }

  goToMedicalFolder() {
    this._router.navigate(['medical-folder'])
  }

  goToAdminDashboard() {
    this._router.navigate(['admin-dashboard'])
  }

  goToRDVs() {
    this._router.navigate(['account/user/mes-rdv'])
  }
  goToRDVsForMedecin() {
    this._router.navigate(['account/praticien/gestion-rdv'])
  }
}
