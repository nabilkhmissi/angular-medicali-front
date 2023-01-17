import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { Patient } from 'src/app/models/Patient';
import { RDV } from 'src/app/models/RDV';
import { User } from 'src/app/models/User';
import { DoctorsService } from 'src/app/services/doctors.service';
import { RdvService } from 'src/app/services/rdv.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-prise-rdv',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.css']
})
export class PriseRDVComponent implements OnInit {

  constructor(private _user: UserService, private _doctor: DoctorsService, private _rdv: RdvService) { }
  patient: Patient = new Patient();
  medecin: Doctor = new Doctor();
  times = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '17:00']
  rdv: RDV = new RDV();
  message = "";
  errors: string[] = [];
  doctorId = localStorage.getItem("selectedDoctor");

  ngOnInit(): void {
    this._user.getUserDataById(this._user.authenticatedUser.id).subscribe(
      (data: Patient) => {
        this.patient = data;
      }
    )
    this._doctor.getById(this.doctorId).subscribe(
      (data) => {
        this.medecin = data;
        //console.log("medecin", data)
      }
    )
  }

  save() {
    this.rdv.doctor = this.medecin;
    this.rdv.patient = this.patient
    this.rdv.etatRDV = "unvalid";
    console.log("new RDV", this.rdv)
    this._rdv.save(this.rdv).subscribe(
      () => {
        this.message = "rendez-vous ajouter avec succés !"
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
    )
  }

}
