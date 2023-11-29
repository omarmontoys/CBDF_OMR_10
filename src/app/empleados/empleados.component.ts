import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  empleados = [
    { id: 1, nombre: 'Juan', sueldo: 450.50, activo: false },
    { id: 2, nombre: 'Luis', sueldo: 400.50, activo: true },
    { id: 3, nombre: 'Alan', sueldo: 350.50, activo: true },
    { id: 4, nombre: 'Hector', sueldo: 250.50, activo: false },
    { id: 5, nombre: 'Luz', sueldo: 550.50, activo: false },
    { id: 6, nombre: 'Miriam', sueldo: 650.50, activo: true },
    { id: 7, nombre: 'Manuel', sueldo: 150.50, activo: false },
    { id: 8, nombre: 'Axel', sueldo: 250.50, activo: true },
    { id: 9, nombre: 'Eduardo', sueldo: 950.50, activo: false },
    { id: 10, nombre: 'Ana', sueldo: 850.50, activo: true},
    ]
}
