import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DossierMedical } from 'src/app/models/DossierMedical';
import { Patient } from 'src/app/models/Patient';
import { DossierMedicalService } from 'src/app/services/medicalFolderServices/dossier-medical.service';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.css']
})
export class FichePatientComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute, 
    private _dossier : DossierMedicalService) { }

  dossier: DossierMedical = new DossierMedical();

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.paramMap.get('id');
    //console.log(id)
    this._dossier.getDossierMedicalByPatientId(id).subscribe(
      (data)=>{
        this.dossier = data
       console.log(data)
      }
    )

  }

}
