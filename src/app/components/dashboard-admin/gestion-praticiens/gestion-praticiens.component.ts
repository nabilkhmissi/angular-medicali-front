import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { Praticien } from 'src/app/models/Praticien';
import { DoctorsService } from 'src/app/services/doctors.service';
import { PraticienService } from 'src/app/services/praticien.service';

@Component({
  selector: 'app-gestion-praticiens',
  templateUrl: './gestion-praticiens.component.html',
  styleUrls: ['./gestion-praticiens.component.css']
})
export class GestionPraticiensComponent implements OnInit {

  constructor(private _doctors: DoctorsService) { }
  praticiens: Doctor[] = [];
  loading = true;
  ngOnInit(): void {
    this._doctors.findAll().subscribe(
      (data: Doctor[]) => {
        this.loading = false;
        this.praticiens = data
      }
    )
  }

  /* delete(id: any) {
    this._praticiens.delete(id).subscribe(
      () => {
      }
    )
  } */
}
