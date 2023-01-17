import { Speciality } from "./Speciality";

export class PraticienDto {
    id?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    phone?: string
    address?: string;
    gouvernaurat?: string;
    postalCode?: string;
    creationDate?: Date
    avatarUrl?: string;
    speciality !: Speciality;
    prixConsultation?: number;
    valid?: boolean;
    rpps_code?: string;
} 