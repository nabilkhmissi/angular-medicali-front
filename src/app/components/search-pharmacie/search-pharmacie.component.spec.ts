import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPharmacieComponent } from './search-pharmacie.component';

describe('SearchPharmacieComponent', () => {
  let component: SearchPharmacieComponent;
  let fixture: ComponentFixture<SearchPharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPharmacieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
