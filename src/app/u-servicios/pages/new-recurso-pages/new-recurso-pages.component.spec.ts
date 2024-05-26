import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecursoPagesComponent } from './new-recurso-pages.component';

describe('NewRecursoPagesComponent', () => {
  let component: NewRecursoPagesComponent;
  let fixture: ComponentFixture<NewRecursoPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRecursoPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRecursoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
