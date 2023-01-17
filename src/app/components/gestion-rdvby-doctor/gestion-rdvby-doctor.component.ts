import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/Patient';
import { RDV } from 'src/app/models/RDV';
import { RdvService } from 'src/app/services/rdv.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gestion-rdvby-doctor',
  templateUrl: './gestion-rdvby-doctor.component.html',
  styleUrls: ['./gestion-rdvby-doctor.component.css']
})
export class GestionRDVByDoctorComponent implements OnInit {

  constructor(private _rdv: RdvService, private _user: UserService, private _router: Router) { }

  rdvs: RDV[] = [];
  ngOnInit(): void {
    this._rdv.findByDoctorId(this._user.authenticatedUser.id).subscribe(
      data => {
        this.rdvs = data
        console.log("rdvs", this.rdvs)
      }
    )
  }

  goToFichePatient(id : any) {
    this._router.navigate(['account/praticien/gestion-rdv/patient/fiche', id])
  }

  validateRDV(id:any){
    this._rdv.validateRDV(id).subscribe(
      ()=>{
        alert("rendez-vous validé avec succés")
        this.ngOnInit();
      }
    )

  }

}
