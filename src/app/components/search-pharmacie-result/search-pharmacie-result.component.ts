import { Component, Input, OnInit } from '@angular/core';
import { Pharmacie } from 'src/app/models/Pharmacie';

@Component({
  selector: 'app-search-pharmacie-result',
  templateUrl: './search-pharmacie-result.component.html',
  styleUrls: ['./search-pharmacie-result.component.css']
})
export class SearchPharmacieResultComponent implements OnInit {

  constructor() { }

  @Input() pharmacies: Pharmacie[] = [];
  ngOnInit(): void {
  }

}
