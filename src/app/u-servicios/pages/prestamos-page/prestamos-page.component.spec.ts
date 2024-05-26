import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosPageComponent } from './prestamos-page.component';

describe('PrestamosPageComponent', () => {
  let component: PrestamosPageComponent;
  let fixture: ComponentFixture<PrestamosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrestamosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestamosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
