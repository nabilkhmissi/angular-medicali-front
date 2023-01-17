import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedecinComponent } from './search-medecin.component';

describe('SearchMedecinComponent', () => {
  let component: SearchMedecinComponent;
  let fixture: ComponentFixture<SearchMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
