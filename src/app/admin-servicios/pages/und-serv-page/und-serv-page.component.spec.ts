import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndServPageComponent } from './und-serv-page.component';

describe('UndServPageComponent', () => {
  let component: UndServPageComponent;
  let fixture: ComponentFixture<UndServPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UndServPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndServPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
