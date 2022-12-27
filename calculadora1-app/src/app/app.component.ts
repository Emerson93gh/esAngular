import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion calculadora1';
  //deshabilitar: string = 'visually-hidden';
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;
  val: string = '';

  sumar():void {
    this.resultado = this.operandoA + this.operandoB;
    this.val = "";
  }
  restar():void {
    this.resultado = this.operandoA - this.operandoB;
    this.val = "";
  }
  multiplicar():void {
    this.resultado = this.operandoA * this.operandoB;
    this.val = "";
  }
  dividir():void {
    this.resultado = this.operandoA / this.operandoB;
    this.val = "";
  }
  modulo():void {
    this.resultado = this.operandoA % this.operandoB;
    if(this.resultado === 0) {
      this.val = "Par";
    } else {
      this.val = "Impar";
    }
  }
}
