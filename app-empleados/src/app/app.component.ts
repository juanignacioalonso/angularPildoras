import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[]=[
    new Empleado("Juan","Alonso","Presidente",150000),
    new Empleado("Mariela","Rivas","Directora",140000),
    new Empleado("Ramiro","Alonso","Jefe de Area",120000),
    new Empleado("Ariadna","Alonso","Aministrativo",110000),
  ];
}
