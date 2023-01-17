import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Analyse } from 'src/app/models/MedicalFolder/analyse';
import { AnalyseService } from 'src/app/services/medicalFolderServices/analyse.service';

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {

  constructor(private _analyse: AnalyseService) { }
  analyse: Analyse = new Analyse();
  errors: string[] = [];
  message = "";
  analyses: Analyse[] = [];
  analyseFile!: File;

  ngOnInit(): void {
    this.getAllAnalyses();
  }

  save() {
    //const imageFormData = new FormData();
    //console.log("file name", this.analyseFile.name)
    //imageFormData.append('image', this.analyseFile, this.analyseFile.name);
    this._analyse.save(this.analyse).subscribe(
      () => {
        this.errors = [];
        this.message = "analyse ajouté avec succés";
        document.getElementById("dismissBtn")?.click();
        setTimeout(() => {
          const box = document.getElementById('box');
          box!.style.display = 'none';
          box!.style.transition = '0.5s'
        }, 3000);
        this.getAllAnalyses();
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

  onUploadFile(event: any) {
    let selectedFile: File = event.target.files[0];
    console.log('selectedFile', selectedFile);
   
    /* const imageFormData = new FormData();
    imageFormData.append('image', selectedFile, selectedFile.name); */

    //console.log("uploaded image", imageFormData)
  }

  addAnalyse(f: NgForm) {
    f.resetForm();
  }

  getAllAnalyses() {
    this._analyse.findAll().subscribe(
      (data: Analyse[]) => {
        this.analyses = data;
      }
    )
  }

  edit(analyse: Analyse) {
    this.analyse = analyse
  }

  delete(id: any) {
    this._analyse.delete(id).subscribe(
      () => {
        this.message = "element est supprimé avec succés";
        this.getAllAnalyses();
        document.getElementById("dismissBtn")?.click();
        setTimeout(() => {
          const box = document.getElementById('box');
          box!.style.display = 'none';
          box!.style.transition = '0.5s'
        }, 3000); // 👈️ time in milliseconds
      }
    )
  }


}


