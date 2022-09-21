import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //forma inline se pueden borrar los archivos .htm y .css
  //styles: ["p{background-color:red;}"] 
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";
  apellido="Alonso";
  edad=5;
  //empresa="Emser";

  /*getEdad(){
    return this.edad;
  }*/

  /*llamaEmpresa(value:String){

  }*/
  
  /*Propiedades Binding */

  habilitacioncuadro=true;

  usoRegistrado=false;

  getRegistroUsuario(){
    this.usoRegistrado=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
