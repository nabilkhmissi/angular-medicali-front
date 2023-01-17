import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DossierMedicalComponent } from './components/dossier-medical/dossier-medical.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { SearchLaboratoireComponent } from './components/search-laboratoire/search-laboratoire.component';
import { SearchMedecinComponent } from './components/search-medecin/search-medecin.component';
import { AuthenticatedUserGuard } from './guard/authenticated-user.guard';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ResumeComponent } from './components/dossier-medical/resume/resume.component';
import { MaladiesComponent } from './components/dossier-medical/maladies/maladies.component';
import { GroupeSanguinComponent } from './components/dossier-medical/groupe-sanguin/groupe-sanguin.component';
import { AnalysesComponent } from './components/dossier-medical/analyses/analyses.component';
import { ChirugiesComponent } from './components/dossier-medical/chirugies/chirugies.component';
import { TraitementsComponent } from './components/dossier-medical/traitements/traitements.component';
import { MedecinsTraitantsComponent } from './components/dossier-medical/medecins-traitants/medecins-traitants.component';
import { VaccinationsComponent } from './components/dossier-medical/vaccinations/vaccinations.component';
import { ExamensRadiologuesComponent } from './components/dossier-medical/examens-radiologues/examens-radiologues.component';
import { AntecedantsFamiliauxComponent } from './components/dossier-medical/antecedants-familiaux/antecedants-familiaux.component';
import { GeneralSettingsComponent } from './components/edit-profile-user/general-settings/general-settings.component';
import { PasswordSettingsComponent } from './components/edit-profile-user/password-settings/password-settings.component';
import { RegisterPraticientComponent } from './components/register-praticient/register-praticient.component';
import { HabitudesComponent } from './components/dossier-medical/habitudes/habitudes.component';
import { AllergiesComponent } from './components/dossier-medical/allergies/allergies.component';
import { AddLaboratoireComponent } from './components/edit-profile-user/add-laboratoire/add-laboratoire.component';
import { EditProfileUserComponent } from './components/edit-profile-user/edit-profile-user.component';
import { PraticientGuard } from './guard/praticient.guard';
import { SearchPharmacieComponent } from './components/search-pharmacie/search-pharmacie.component';
import { AdminGuard } from './guard/admin.guard';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { GestionSpecialityComponent } from './components/dashboard-admin/gestion-speciality/gestion-speciality.component';
import { GestionUsersComponent } from './components/dashboard-admin/gestion-users/gestion-users.component';
import { GestionPraticiensComponent } from './components/dashboard-admin/gestion-praticiens/gestion-praticiens.component';
import { DashboardComponent } from './components/dashboard-admin/dashboard/dashboard.component';
import { GestionLabosComponent } from './components/dashboard-admin/gestion-labos/gestion-labos.component';
import { GestionPharmacyComponent } from './components/dashboard-admin/gestion-pharmacy/gestion-pharmacy.component';
import { PriseRDVComponent } from './components/prise-rdv/prise-rdv.component';
import { EspaceRdvComponent } from './components/espace-rdv/espace-rdv.component';
import { GestionRDVByDoctorComponent } from './components/gestion-rdvby-doctor/gestion-rdvby-doctor.component';
import { FichePatientComponent } from './components/gestion-rdvby-doctor/fiche-patient/fiche-patient.component';
import { Patient } from './models/Patient';

const routes: Routes = [
  //public routes

  { path: "", component: IndexComponent },
  { path: "login", component: LoginComponent },
  { path: "search-medecin", component: SearchMedecinComponent },
  { path: "search-laboratoire", component: SearchLaboratoireComponent },
  { path: "search-pharmacie", component: SearchPharmacieComponent },
  { path: "register", component: RegisterUserComponent },
  { path: "register-praticien", component: RegisterPraticientComponent },
  //user profile routes
  {
    path: "account/user", component: EditProfileUserComponent, canActivate: [AuthenticatedUserGuard],
    children: [
      { path: "", redirectTo: "settings", pathMatch: 'full' },
      { path: "settings", component: GeneralSettingsComponent },
      { path: "password", component: PasswordSettingsComponent },
      { path: "add-laboratoire", component: AddLaboratoireComponent },
    ]
  },
  { path: "prise-rdv", component: PriseRDVComponent, canActivate: [AuthenticatedUserGuard] },
  { path: "account/user/mes-rdv", component: EspaceRdvComponent, canActivate: [AuthenticatedUserGuard] },
  {
    path: "medical-folder", component: DossierMedicalComponent, canActivate: [AuthenticatedUserGuard || AdminGuard],
    children: [
      { path: "", redirectTo: "resume", pathMatch: 'full' },
      { path: "resume", component: ResumeComponent },
      { path: "maladies", component: MaladiesComponent },
      { path: "groupes-sanguins", component: GroupeSanguinComponent },
      { path: "analyses", component: AnalysesComponent },
      { path: "chirugies", component: ChirugiesComponent },
      { path: "traitements", component: TraitementsComponent },
      { path: "medecins-traitants", component: MedecinsTraitantsComponent },
      { path: "vaccinations", component: VaccinationsComponent },
      { path: "examens-radiologues", component: ExamensRadiologuesComponent },
      { path: "habitudes", component: HabitudesComponent },
      { path: "allergies", component: AllergiesComponent },
      { path: "antecedants-familiaux", component: AntecedantsFamiliauxComponent },
    ]
  },

  //praticien after auth routes
  {
    path: "account/praticien", component: EditProfileUserComponent, canActivate: [PraticientGuard],
    children: [
      { path: "", redirectTo: "settings", pathMatch: 'full' },
      { path: "settings", component: GeneralSettingsComponent },
      { path: "password", component: PasswordSettingsComponent },

    ]
  },
  {
    path: "account/praticien/gestion-rdv", component: GestionRDVByDoctorComponent, canActivate: [AuthenticatedUserGuard]
  },
  { path: "account/praticien/gestion-rdv/patient/fiche/:id", component: FichePatientComponent},

  //praticien profile routes


  /* admin routes */

  {
    path: "account/admin", component: EditProfileUserComponent, canActivate: [AdminGuard],
    children: [
      { path: "", redirectTo: "settings", pathMatch: 'full' },
      { path: "settings", component: GeneralSettingsComponent },
      { path: "password", component: PasswordSettingsComponent }]
  }, {
    path: "admin-dashboard", component: DashboardAdminComponent, canActivate: [AdminGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: 'full' },
      { path: "dashboard", component: DashboardComponent },
      { path: "speciality", component: GestionSpecialityComponent },
      { path: "users", component: GestionUsersComponent },
      { path: "praticiens", component: GestionPraticiensComponent },
      { path: "laboratoires", component: GestionLabosComponent },
      { path: "pharmacies", component: GestionPharmacyComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
