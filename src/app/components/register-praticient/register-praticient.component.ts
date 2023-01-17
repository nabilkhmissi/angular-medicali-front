import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Doctor } from 'src/app/models/Doctor';
import { Praticien } from 'src/app/models/Praticien';
import { Speciality } from 'src/app/models/Speciality';
import { CommonService } from 'src/app/services/common.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { LaboratoireService } from 'src/app/services/laboratoire.service';
import { PharmacieService } from 'src/app/services/pharmacie.service';
import { SpecialityService } from 'src/app/services/speciality.service';

@Component({
  selector: 'app-register-praticient',
  templateUrl: './register-praticient.component.html',
  styleUrls: ['./register-praticient.component.css']
})
export class RegisterPraticientComponent implements OnInit {

  constructor(private _doctorService: DoctorsService,
    private _common: CommonService,
    private _specialityServices: SpecialityService,
    private _router: Router,
    private _http: HttpClient,
    private _labos: LaboratoireService,
    private _pharmacie: PharmacieService) { }

  errors: string[] = [];
  lundi = "";
  praticienType: string = "doctor";
  message = "";
  gouvernaurats = this._common.gouvernaurats;
  specialities: Speciality[] = [];
  /* attributes */
  firstName: any;
  lastName: string = "";
  username: string = "";
  password: string = "";
  address: string = "";
  gouvernaurat: string = "";
  postalCode: string = "";
  rpps_code: string = "";
  speciality: Speciality = new Speciality();
  role: string = "";
  prix_consultation: number = 0;
  dayOrNight: string = "";

  ngOnInit(): void {
    this._specialityServices.getAllSpecialities().subscribe(
      (data: Speciality[]) => {
        this.specialities = data
      }
    )
  }

  register() {
    let praticien = {};
    console.log(this.praticienType)
    switch (this.praticienType) {
      case 'doctor':
        praticien = {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          address: this.address,
          gouvernaurat: this.gouvernaurat,
          postalCode: this.postalCode,
          rpps_code: this.rpps_code,
          speciality: this.speciality,
          role: 'praticien',
          prixConsultation: this.prix_consultation
        }
        console.log(praticien)
        this._doctorService.register(praticien).subscribe(
          () => {
            this.errors = [];
            this.message = "médecin ajouté avec succés"
          },
          error => {
            this.message = '';
            if (error.error.errors == null) {
              this.errors.push(error.error.message);
            } else {
              this.errors = []
              this.errors = error.error.errors;
            }
          }
        );
        break;
      case 'laboratoire':
        praticien = {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          address: this.address,
          gouvernaurat: this.gouvernaurat,
          postalCode: this.postalCode,
          rpps_code: this.rpps_code,
          role: 'praticien'
        }
        console.log(praticien)
        this._labos.register(praticien).subscribe(
          () => {
            this.errors = [];
            this.message = "laboratoire ajouté avec succés"
          },
          error => {
            this.message = '';
            if (error.error.errors == null) {
              this.errors.push(error.error.message);
            } else {
              this.errors = []
              this.errors = error.error.errors;
            }
          }
        );
        break;
      case 'pharmacie':
        praticien = {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          address: this.address,
          gouvernaurat: this.gouvernaurat,
          postalCode: this.postalCode,
          rpps_code: this.rpps_code,
          role: 'praticien',
          dayOrNight: this.dayOrNight,
          
        }
        console.log(praticien)
        this._pharmacie.register(praticien).subscribe(
          () => {
            this.errors = [];
            this.message = "pharmacie ajouté avec succés"
          },
          error => {
            this.message = '';
            if (error.error.errors == null) {
              this.errors.push(error.error.message);
            } else {
              this.errors = []
              this.errors = error.error.errors;
            }
          }
        );
    }


  }


}
