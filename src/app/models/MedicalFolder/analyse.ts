export class Analyse {
    id?: number;
    name?: string;
    date?: Date;
    etablissement?: string;
    description!: string;
    nextAlert?: Date;
    file! : File;
}