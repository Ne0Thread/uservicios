import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosTableComponent } from './prestamos-table.component';

describe('PrestamosTableComponent', () => {
  let component: PrestamosTableComponent;
  let fixture: ComponentFixture<PrestamosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrestamosTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestamosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
