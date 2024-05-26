import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface tipos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-recurso-pages',
  templateUrl: './new-recurso-pages.component.html',
  styles: ``
})
export class NewRecursoPagesComponent {
  resourceForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resourceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  tipo: tipos[] = [
    {value: 'tipo-0', viewValue: 'Salon'},
    {value: 'tipo-1', viewValue: 'Herramienta'},
    {value: 'tipo-2', viewValue: 'Juego'},
  ];
}
