import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReservarComponent } from './form-reservar.component';

describe('FormReservarComponent', () => {
  let component: FormReservarComponent;
  let fixture: ComponentFixture<FormReservarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormReservarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormReservarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
