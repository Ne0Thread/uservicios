import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviciosPageComponent } from './uservicios-page.component';

describe('UserviciosPageComponent', () => {
  let component: UserviciosPageComponent;
  let fixture: ComponentFixture<UserviciosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserviciosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserviciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
