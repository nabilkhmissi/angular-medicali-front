import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Maladie } from 'src/app/models/MedicalFolder/Maladie';
import { MaladieService } from 'src/app/services/medicalFolderServices/maladie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-maladies',
  templateUrl: './maladies.component.html',
  styleUrls: ['./maladies.component.css']
})
export class MaladiesComponent implements OnInit {

  constructor(private _maladies: MaladieService, private _user: UserService) { }

  maladies: Maladie[] = [];
  newMaladie: Maladie = new Maladie();
  errors: string[] = [];
  message = "";
  name!: string;
  medicalSpeciality!: string;
  isFamilialAntecedent: boolean = false;
  isLongTermMalady: boolean = false;
  dateDetection!: Date;
  dateGuerir!: Date;
  description!: string;
  authenticatedUser: any;

  ngOnInit(): void {
    this.authenticatedUser = this._user.authenticatedUser;
   
    this.findMaladies();
  }

  findMaladies() {
    console.log("authenticated user", this.authenticatedUser)
    this._maladies.findByUserId(this.authenticatedUser.id).subscribe(
      (data) => {
        this.maladies = data;
      }
    )
  }

  save() {
    this._maladies.save(this.newMaladie).subscribe(
      () => {
        this.errors = [];
        this.message = "maladie ajouté avec succés";
        this.findMaladies();

        document.getElementById("dismissBtn")?.click();
        setTimeout(() => {
          const box = document.getElementById('box');
          box!.style.display = 'none';
          box!.style.transition = '0.5s'
        }, 3000);
        this.findMaladies();
      },
      error => {
        this.errors = [];
        this.message = '';
        if (error.error.errors == null) {
          this.errors.push(error.error.message);
        } else {
          this.errors = []
          this.errors = error.error.errors;
        }
      }
    );

  }

  addMaladie(f: NgForm) {
    f.resetForm();
  }


  editMalady(m: Maladie) {
    this.newMaladie = m;
  }

  delete(id: any) {
    this._maladies.delete(id).subscribe(
      () => {
        this.message = "element est supprimé avec succés";
        this.findMaladies();
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
