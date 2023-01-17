import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { GeoCode } from 'src/app/models/GeoCode.interface';
import { Praticien } from 'src/app/models/Praticien';
import { Speciality } from 'src/app/models/Speciality';
import { CommonService } from 'src/app/services/common.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { SpecialityService } from 'src/app/services/speciality.service';

@Component({
  selector: 'app-search-medecin',
  templateUrl: './search-medecin.component.html',
  styleUrls: ['./search-medecin.component.css']
})
export class SearchMedecinComponent implements OnInit {

  constructor(private _speciality: SpecialityService,
    private _doctors: DoctorsService,
    private _common: CommonService) { }

  specialities: Speciality[] = [];
  gouvernaurats: string[] = [];
  delegations: any = [];
  doctors: Doctor[] = [];
  clicked = false;
  retrieved = false;

  praticienName: string = "";
  gouvernaurat: string = "";
  specialite: string = "";
  dataLength = 0;

  ngOnInit(): void {
    this._speciality.getAllSpecialities().subscribe(
      (data: Speciality[]) => {
        this.specialities = data
      }
    );

    this.gouvernaurats = this._common.gouvernaurats;
  }


  search() {
    this.clicked = true;
    this.retrieved = false;
    let searchItem = {
      "praticienName": this.praticienName,
      "speciality": this.specialite,
      "gouvernaurat": this.gouvernaurat
    }
    this._doctors.findDoctorsBy(searchItem).subscribe(
      (data) => {
        this.doctors = data
        console.log("selected doctors", data)
        this.retrieved = true;
        this.dataLength = data.length
      }
    );
  }

}
