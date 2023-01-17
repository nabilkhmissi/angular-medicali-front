import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPharmacyComponent } from './gestion-pharmacy.component';

describe('GestionPharmacyComponent', () => {
  let component: GestionPharmacyComponent;
  let fixture: ComponentFixture<GestionPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPharmacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
