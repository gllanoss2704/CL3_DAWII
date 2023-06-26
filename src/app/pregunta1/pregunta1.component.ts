import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.scss']
})
export class Pregunta1Component {
  calificaciones: number[] = [0, 0, 0];
  promedio: number | null = null;

  calcularPromedio() {
    const sum = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    this.promedio = sum / this.calificaciones.length;
  }
}
