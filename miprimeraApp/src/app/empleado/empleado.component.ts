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
  empresa="google";

  

  /*getEdad(){
    return this.edad;
  }*/

  /*llamaEmpresa(value:String){

  }*/
  
  /*Propiedades Binding */

  habilitacioncuadro=false;

  usoRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usoRegistrado=false;
  }
  setUsuarioRegistrado(event:Event){
    //alert("El usuario se registro correctamente");
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar"
    }
    else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
