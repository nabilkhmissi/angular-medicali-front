import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-search-medecin-result',
  templateUrl: './search-medecin-result.component.html',
  styleUrls: ['./search-medecin-result.component.css']
})
export class SearchMedecinResultComponent implements OnInit {

  constructor(private router : Router) { }



  @Input() doctors: any[] = [];

  ngOnInit(): void {
   
  }

  goToPriseRDV(id : any){
    this.router.navigate(['prise-rdv']);
    localStorage.setItem("selectedDoctor", id)
  }
}
