import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SearchMedecinComponent } from './components/search-medecin/search-medecin.component';
import { FormsModule } from '@angular/forms';
import { SearchLaboratoireComponent } from './components/search-laboratoire/search-laboratoire.component';
import { SearchLaboratoireResultComponent } from './components/search-laboratoire-result/search-laboratoire-result.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DossierMedicalComponent } from './components/dossier-medical/dossier-medical.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { EditProfileUserComponent } from './components/edit-profile-user/edit-profile-user.component';
import { ResumeComponent } from './components/dossier-medical/resume/resume.component';
import { MaladiesComponent } from './components/dossier-medical/maladies/maladies.component';
import { GroupeSanguinComponent } from './components/dossier-medical/groupe-sanguin/groupe-sanguin.component';
import { AnalysesComponent } from './components/dossier-medical/analyses/analyses.component';
import { ChirugiesComponent } from './components/dossier-medical/chirugies/chirugies.component';
import { TraitementsComponent } from './components/dossier-medical/traitements/traitements.component';
import { MedecinsTraitantsComponent } from './components/dossier-medical/medecins-traitants/medecins-traitants.component';
import { VaccinationsComponent } from './components/dossier-medical/vaccinations/vaccinations.component';
import { ExamensRadiologuesComponent } from './components/dossier-medical/examens-radiologues/examens-radiologues.component';
import { HabitudesComponent } from './components/dossier-medical/habitudes/habitudes.component';
import { AllergiesComponent } from './components/dossier-medical/allergies/allergies.component';
import { AntecedantsFamiliauxComponent } from './components/dossier-medical/antecedants-familiaux/antecedants-familiaux.component';
import { GeneralSettingsComponent } from './components/edit-profile-user/general-settings/general-settings.component';
import { PasswordSettingsComponent } from './components/edit-profile-user/password-settings/password-settings.component';
import { RegisterPraticientComponent } from './components/register-praticient/register-praticient.component';
import { AddLaboratoireComponent } from './components/edit-profile-user/add-laboratoire/add-laboratoire.component';
import { SearchMedecinResultComponent } from './components/search-medecin-result/search-medecin-result.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchPharmacieComponent } from './components/search-pharmacie/search-pharmacie.component';
import { SearchPharmacieResultComponent } from './components/search-pharmacie-result/search-pharmacie-result.component';
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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    SearchMedecinResultComponent,
    SearchMedecinComponent,
    SearchLaboratoireComponent,
    SearchLaboratoireResultComponent,
    LoadingComponent,
    DossierMedicalComponent,
    LoginComponent,
    RegisterUserComponent,
    EditProfileUserComponent,
    ResumeComponent,
    MaladiesComponent,
    GroupeSanguinComponent,
    AnalysesComponent,
    ChirugiesComponent,
    TraitementsComponent,
    MedecinsTraitantsComponent,
    VaccinationsComponent,
    ExamensRadiologuesComponent,
    HabitudesComponent,
    AllergiesComponent,
    AntecedantsFamiliauxComponent,
    GeneralSettingsComponent,
    PasswordSettingsComponent,
    RegisterPraticientComponent,
    AddLaboratoireComponent,
    SearchPharmacieComponent,
    SearchPharmacieResultComponent,
    DashboardAdminComponent,
    GestionSpecialityComponent,
    GestionUsersComponent,
    GestionPraticiensComponent,
    DashboardComponent,
    GestionLabosComponent,
    GestionPharmacyComponent,
    PriseRDVComponent,
    EspaceRdvComponent,
    GestionRDVByDoctorComponent,
    FichePatientComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
