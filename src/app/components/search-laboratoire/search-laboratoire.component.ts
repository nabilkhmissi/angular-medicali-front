import { Component, OnInit } from '@angular/core';
import { Laboratoire } from 'src/app/models/Laboratoire';
import { Speciality } from 'src/app/models/Speciality';
import { CommonService } from 'src/app/services/common.service';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-search-laboratoire',
  templateUrl: './search-laboratoire.component.html',
  styleUrls: ['./search-laboratoire.component.css']
})
export class SearchLaboratoireComponent implements OnInit {

  constructor(private _laboratoires: LaboratoireService,
    private _common : CommonService) { }

  specialities: Speciality[] = [];
  laboratoires: Laboratoire[] = [];
  gouvernaurats : string[] = [];
  clicked = false;
  retrieved = false;


  gouvernaurat: string = "";
  nomLaboratoire: string = "";
  specialite: string = "";
  dataLength = 0;

  ngOnInit(): void {
    this.gouvernaurats = this._common.gouvernaurats;
  }


  search() {
    this.clicked = true;
    this.retrieved = false;
    let searchItem = {
      gouvernaurat : this.gouvernaurat,
      nomLaboratoire: this.nomLaboratoire
    }
    this._laboratoires.findLaboratoiresBy(searchItem).subscribe(
      (data)=>{
        this.laboratoires = data
        this.dataLength = data.length;
        this.retrieved = true;
      }
    );
  }


}