import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerentesTableComponent } from './gerentes-table.component';

describe('GerentesTableComponent', () => {
  let component: GerentesTableComponent;
  let fixture: ComponentFixture<GerentesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerentesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerentesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
