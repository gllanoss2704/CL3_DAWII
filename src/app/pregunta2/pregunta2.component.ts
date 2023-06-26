import { Component } from '@angular/core';



@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component {


  seccionActiva = 0;

  marca = [
    {nombre: "Samsumg"},
    {nombre: "Motorola"},
    {nombre: "Iphone"},
    {nombre: "Xiaomi"}
  ];

  proveedor = [
    {nombre: "MAJU celulares"},
    {nombre: "Multiservicios Pool"},
    {nombre: "Maldonado Guevara"},
    
  ];
 

  mostrarMarca(): void{
    this.seccionActiva = 0;
  }
  mostrarProveedor(): void {
    this.seccionActiva = 1;
  }


  
}
