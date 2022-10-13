import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje='';
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas:any;

  constructor(){
    this.entradas=[
      {titulo:"Python cada día más presente "},
      {titulo:"Java presente desde hace 20 años "},
      {titulo:"JavaScrip cada ves mas funcional "},
      {titulo:"Kotlin potencia para tus apps "},
      {titulo:"¿Donde quedo Pascal? "},
    ]
  }


  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario registrado con éxito"
  }
}
