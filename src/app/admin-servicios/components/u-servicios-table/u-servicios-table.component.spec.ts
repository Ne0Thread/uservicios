import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UServiciosTableComponent } from './u-servicios-table.component';

describe('UServiciosTableComponent', () => {
  let component: UServiciosTableComponent;
  let fixture: ComponentFixture<UServiciosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UServiciosTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UServiciosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
