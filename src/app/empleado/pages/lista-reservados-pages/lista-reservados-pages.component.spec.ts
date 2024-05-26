import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReservadosPagesComponent } from './lista-reservados-pages.component';

describe('ListaReservadosPagesComponent', () => {
  let component: ListaReservadosPagesComponent;
  let fixture: ComponentFixture<ListaReservadosPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaReservadosPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaReservadosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
