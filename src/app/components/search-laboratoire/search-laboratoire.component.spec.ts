import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLaboratoireComponent } from './search-laboratoire.component';

describe('SearchLaboratoireComponent', () => {
  let component: SearchLaboratoireComponent;
  let fixture: ComponentFixture<SearchLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLaboratoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
