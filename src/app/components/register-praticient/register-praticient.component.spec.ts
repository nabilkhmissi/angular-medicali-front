import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPraticientComponent } from './register-praticient.component';

describe('RegisterPraticientComponent', () => {
  let component: RegisterPraticientComponent;
  let fixture: ComponentFixture<RegisterPraticientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPraticientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPraticientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
