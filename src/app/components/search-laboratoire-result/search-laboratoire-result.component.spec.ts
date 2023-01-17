import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLaboratoireResultComponent } from './search-laboratoire-result.component';

describe('SearchLaboratoireResultComponent', () => {
  let component: SearchLaboratoireResultComponent;
  let fixture: ComponentFixture<SearchLaboratoireResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLaboratoireResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLaboratoireResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
