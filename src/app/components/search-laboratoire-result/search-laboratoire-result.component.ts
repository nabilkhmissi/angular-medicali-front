import { Component, OnInit, Input } from '@angular/core';
import { Laboratoire } from 'src/app/models/Laboratoire';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-search-laboratoire-result',
  templateUrl: './search-laboratoire-result.component.html',
  styleUrls: ['./search-laboratoire-result.component.css']
})
export class SearchLaboratoireResultComponent implements OnInit {

  constructor(private _laboratoires: LaboratoireService) { }

  @Input() laboratoires: Laboratoire[] = [];
  ngOnInit(): void {
  }

}
