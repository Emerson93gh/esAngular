import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion calculadora1';
  //deshabilitar: string = 'visually-hidden';

  resultado: number = 0;
  val: string = '';

  procesarResultado(resultado: number) {
    this.resultado = resultado;
  }
  procesarValor(valor: string) {
    this.val = valor;
  }
}
