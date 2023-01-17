import { Component, OnInit } from '@angular/core';
import { Pharmacie } from 'src/app/models/Pharmacie';
import { PharmacieService } from 'src/app/services/pharmacie.service';

@Component({
  selector: 'app-gestion-pharmacy',
  templateUrl: './gestion-pharmacy.component.html',
  styleUrls: ['./gestion-pharmacy.component.css']
})
export class GestionPharmacyComponent implements OnInit {

  constructor(private _pharmacy: PharmacieService) { }

  pharmacies: Pharmacie[] = [];
  loading = true;
  ngOnInit(): void {
    this.findAll();
  }



  findAll() {
    this._pharmacy.findAll().subscribe(
      data => {
        this.loading =  false;
        this.pharmacies = data;
      }
    )
  }

  delete(id: any) {
    this._pharmacy.delete(id).subscribe(
      () => {
        this.findAll();
      }
    )
  }

}
