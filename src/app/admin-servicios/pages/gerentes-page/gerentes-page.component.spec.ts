import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerentesPageComponent } from './gerentes-page.component';

describe('GerentesPageComponent', () => {
  let component: GerentesPageComponent;
  let fixture: ComponentFixture<GerentesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerentesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerentesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
