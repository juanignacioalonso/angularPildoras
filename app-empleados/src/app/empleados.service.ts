import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()//Para que se pueda iyectar informacion desde afuera de esta clase
export class EmpleadosService{
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){
    
  }
    empleados:Empleado[]=[
        new Empleado("Juan","Alonso","Presidente",150000),
        new Empleado("Mariela","Rivas","Directora",140000),
        new Empleado("Ramiro","Alonso","Jefe de Area",120000),
        new Empleado("Ariadna","Alonso","Aministrativo",110000),
      ];

      agregarEmpleadoServicio(miEmpleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar"+"\n"+ miEmpleado.nombre+"\n"+"Salario: "+miEmpleado.salario);
        this.empleados.push(miEmpleado); 
      }
      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];
        return empleado;
      }
      //Sobreeescribimos el empleado con este metodo
      actualizarEmpleado(indice:number,empleado:Empleado){
        let empleadoModificado=this.empleados[indice];
        empleadoModificado.nombre=empleado.nombre; 
        empleadoModificado.apellido=empleado.apellido; 
        empleadoModificado.cargo=empleado.cargo; 
        empleadoModificado.salario=empleado.salario; 

      }
}