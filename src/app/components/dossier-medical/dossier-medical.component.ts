import { Component, OnInit } from '@angular/core';
import { DossierMedical } from 'src/app/models/DossierMedical';
import { Mesure } from 'src/app/models/MedicalFolder/Mesure';
import { DossierMedicalService } from 'src/app/services/medicalFolderServices/dossier-medical.service';
import { MesureService } from 'src/app/services/medicalFolderServices/mesure.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dossier-medical',
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.css']
})
export class DossierMedicalComponent implements OnInit {

  constructor(private _dossier_medical: DossierMedicalService,
  ) { }

  dossier!: DossierMedical;

  height = "";
  pression = "";
  poids = "";
  groupe_sanguin = "";
  mesures: Mesure[] = [];


  ngOnInit(): void {
    this._dossier_medical.getDossierMedical().subscribe(
      (data: DossierMedical) => {
        this.dossier = data
        this.mesures = this.dossier.mesures;
        let mesure : Mesure = this.mesures[0];
        this.height = mesure?.hauteur;
        this.poids = mesure?.poids;
        this.pression = mesure?.pressionSanguine;
        this.groupe_sanguin = mesure?.groupeSanguin;
        
      }
    )
    /*  let mesure = this.dossier.mesures; */
    /* console.log(mesure) */
  }




}


