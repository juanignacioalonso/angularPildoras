import { Empleado } from "./empleado.model";

export class EmpleadosService{
    empleados:Empleado[]=[
        new Empleado("Juan","Alonso","Presidente",150000),
        new Empleado("Mariela","Rivas","Directora",140000),
        new Empleado("Ramiro","Alonso","Jefe de Area",120000),
        new Empleado("Ariadna","Alonso","Aministrativo",110000),
      ];

      agregarEmpleadoServicio(miEmpleado:Empleado){
        this.empleados.push(miEmpleado); 
      }
}