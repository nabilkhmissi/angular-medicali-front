import { Component, OnInit } from '@angular/core';
import { RDV } from 'src/app/models/RDV';
import { RdvService } from 'src/app/services/rdv.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-espace-rdv',
  templateUrl: './espace-rdv.component.html',
  styleUrls: ['./espace-rdv.component.css']
})
export class EspaceRdvComponent implements OnInit {

  constructor(private _rdv: RdvService, private _user: UserService) { }
  rdvs: RDV[] = [];

  ngOnInit(): void {
    this._rdv.findByUserId(this._user.authenticatedUser.id).subscribe(
      (data) => {
        this.rdvs = data;
      }
    )
  }


  annulerRDV(id:any){
    this._rdv.annulerRDV(id).subscribe(
      ()=>{
        alert("rendez-vous annuler avec succés !")
        this.ngOnInit();
      }
    )
  }

}
