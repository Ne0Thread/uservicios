import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratarPageComponent } from './contratar-page.component';

describe('ContratarPageComponent', () => {
  let component: ContratarPageComponent;
  let fixture: ComponentFixture<ContratarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContratarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContratarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
