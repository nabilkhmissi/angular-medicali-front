import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPharmacieResultComponent } from './search-pharmacie-result.component';

describe('SearchPharmacieResultComponent', () => {
  let component: SearchPharmacieResultComponent;
  let fixture: ComponentFixture<SearchPharmacieResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPharmacieResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPharmacieResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
