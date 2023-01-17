import { DossierMedical } from "./DossierMedical";
import { User } from "./User";

export class Patient extends User{
   dossierMedical? : DossierMedical;
} 