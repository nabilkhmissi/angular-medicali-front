import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

export class RDV {
    id!: number;
    patient!: Patient;
    doctor!: Doctor;
    soucis!: string;
    jourRDV! : Date;
    time!: string;
    etatRDV! : string;


} 
