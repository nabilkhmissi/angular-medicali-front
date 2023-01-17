import { Component, OnInit } from '@angular/core';
import { Laboratoire } from 'src/app/models/Laboratoire';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-gestion-labos',
  templateUrl: './gestion-labos.component.html',
  styleUrls: ['./gestion-labos.component.css']
})
export class GestionLabosComponent implements OnInit {

  constructor(private _labo: LaboratoireService) { }

  laboratoires: Laboratoire[] = [];
  loading = true;
  ngOnInit(): void {
    this.findAllLabos();
  }

  findAllLabos() {
    this._labo.findAll().subscribe(
      data => {
        this.laboratoires = data;
        this.loading = false;
      }
    )
  }

  delete(id: any) {
    this._labo.delete(id).subscribe(
      () => {

      }
    )
  }

}
