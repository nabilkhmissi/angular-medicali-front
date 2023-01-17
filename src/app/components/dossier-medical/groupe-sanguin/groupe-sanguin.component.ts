import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mesure } from 'src/app/models/MedicalFolder/Mesure';
import { MesureService } from 'src/app/services/medicalFolderServices/mesure.service';

@Component({
  selector: 'app-groupe-sanguin',
  templateUrl: './groupe-sanguin.component.html',
  styleUrls: ['./groupe-sanguin.component.css']
})
export class GroupeSanguinComponent implements OnInit {

  constructor(private _mesure: MesureService) { }

  mesure: Mesure = new Mesure();
  mesures: Mesure[] = [];
  errors: string[] = [];
  listeAnalyse = ""
  message = "";

  @Output() reload = new EventEmitter();

  ngOnInit(): void {
    this.findAll();
  }

  addMesures(f: NgForm) {
    this.mesure = new Mesure();
    f.resetForm();
  }

  save() {
    this._mesure.save(this.mesure).subscribe(
      () => {
        this.errors = [];
        this.message = "analyse ajouté avec succés";
        document.getElementById("dismissBtn")?.click();
        setTimeout(() => {
          const box = document.getElementById('box');
          box!.style.display = 'none';
          box!.style.transition = '0.5s'
        }, 3000);
        this.findAll();
      }, error => {
        this.errors = [];
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

  findAll() {
    this._mesure.findAll().subscribe(
      (data) => {
        this.mesures = data
      }
    )
  }

  edit(m: Mesure) {
    this.mesure = m;
  }

  delete(id: any) {
    this._mesure.delete(id).subscribe(
      () => {
        this.message = "element est supprimé avec succés";
        this.findAll();
        document.getElementById("dismissBtn")?.click();
        setTimeout(() => {
          const box = document.getElementById('box');
          box!.style.display = 'none';
          box!.style.transition = '0.5s'
        }, 3000); // 👈️ time in milliseconds
      }
    )
  }

  emit(){
    this.reload.emit();
  }





}
