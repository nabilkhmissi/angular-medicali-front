import { Analyse } from "./MedicalFolder/analyse";
import { Maladie } from "./MedicalFolder/Maladie";
import { Mesure } from "./MedicalFolder/Mesure";

export class DossierMedical {
    id?: string;
    analyse!: Analyse[];
    maladies!: Maladie[];
    mesures!: Mesure[];
} 