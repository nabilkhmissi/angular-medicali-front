export class Maladie {
    id?: number;
    name?: string;
    medicalSpeciality?: string;
    familialAntecedent?: boolean;
    longTermMalady?: boolean;
    dateDetection?: Date;
    dateGuerir!: Date;
    description!: string;
}