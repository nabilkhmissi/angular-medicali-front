import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Speciality } from 'src/app/models/Speciality';
import { SpecialityService } from 'src/app/services/speciality.service';

@Component({
  selector: 'app-gestion-speciality',
  templateUrl: './gestion-speciality.component.html',
  styleUrls: ['./gestion-speciality.component.css']
})
export class GestionSpecialityComponent implements OnInit {

  constructor(private _speciality: SpecialityService) { }

  speciality: Speciality = new Speciality;
  message: string = "";
  errors: any = [];
  specialities: Speciality[] = [];
  selectedSpeciality !: Speciality;
  loading : boolean = true;



  ngOnInit(): void {

    this._speciality.getAllSpecialities().subscribe(
      (data: Speciality[]) => {
        this.loading = false;
        this.specialities = data;
      }
    )
  }

  delete(id: any) {
    this._speciality.delete(id).subscribe(
      () => {
        this.ngOnInit()
      }
    )
  }

  save(f: NgForm) {
    this._speciality.save(this.speciality).subscribe(
      () => {
        this.errors = [];
        this.message = "specialité ajouté avec succés";
        f.reset();
        this.ngOnInit();
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

  edit(s: any) {
    this.speciality = s;
  }

  clearForm(f: NgForm) {
    f.reset();
  }


}
