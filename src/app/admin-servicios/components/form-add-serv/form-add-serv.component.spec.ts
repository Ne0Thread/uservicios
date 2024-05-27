import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddServComponent } from './form-add-serv.component';

describe('FormAddServComponent', () => {
  let component: FormAddServComponent;
  let fixture: ComponentFixture<FormAddServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddServComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
