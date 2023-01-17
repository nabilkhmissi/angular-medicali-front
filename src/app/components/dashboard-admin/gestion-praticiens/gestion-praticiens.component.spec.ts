import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPraticiensComponent } from './gestion-praticiens.component';

describe('GestionPraticiensComponent', () => {
  let component: GestionPraticiensComponent;
  let fixture: ComponentFixture<GestionPraticiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPraticiensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPraticiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
