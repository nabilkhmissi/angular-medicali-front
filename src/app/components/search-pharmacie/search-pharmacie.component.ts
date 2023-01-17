import { Component, OnInit } from '@angular/core';
import { Pharmacie } from 'src/app/models/Pharmacie';
import { Speciality } from 'src/app/models/Speciality';
import { CommonService } from 'src/app/services/common.service';
import { PharmacieService } from 'src/app/services/pharmacie.service';

@Component({
  selector: 'app-search-pharmacie',
  templateUrl: './search-pharmacie.component.html',
  styleUrls: ['./search-pharmacie.component.css']
})
export class SearchPharmacieComponent implements OnInit {

  constructor(private _pharmacie: PharmacieService,
    private _common: CommonService) { }

  specialities: Speciality[] = [];
  pharmacies: Pharmacie[] = [];
  gouvernaurats: string[] = [];
  clicked = false;
  retrieved = false;


  gouvernaurat: string = "";
  name: string = "";
  specialite: string = "";
  dayOrNight: string = "";
  dataLength = 0;

  ngOnInit(): void {
    this.gouvernaurats = this._common.gouvernaurats;
  }


  search() {
    this.clicked = true;
    this.retrieved = false;
    let searchItem = {
      gouvernaurat: this.gouvernaurat,
      name: this.name,
      dayOrNight : this.dayOrNight
    }
    console.log(searchItem)
    this._pharmacie.findBy(searchItem).subscribe(
      (data) => {
        this.pharmacies = data
        this.dataLength = data.length;
        this.retrieved = true;
      }
    );
  }
}
