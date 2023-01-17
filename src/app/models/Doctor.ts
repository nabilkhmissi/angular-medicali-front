import { Praticien } from "./Praticien";
import { Speciality } from "./Speciality";

export class Doctor extends Praticien {
    speciality: Speciality = new Speciality();
    prixConsultation?: any;
    joursDeTravail! : string;
}