import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;
  val: string = '';

  @Output() miResultado = new EventEmitter<number>();
  @Output() miValor = new EventEmitter<string>();

  sumar():void {
    this.resultado = this.operandoA + this.operandoB;
    this.miResultado.emit(this.resultado);
    this.val = "";
    this.miValor.emit(this.val);
  }
  restar():void {
    this.resultado = this.operandoA - this.operandoB;
    this.miResultado.emit(this.resultado);
    this.val = "";
    this.miValor.emit(this.val);
  }
  multiplicar():void {
    let resultado = this.operandoA * this.operandoB;
    this.miResultado.emit(resultado);
    this.val = "";
    this.miValor.emit(this.val);
  }
  dividir():void {
    let resultado = this.operandoA / this.operandoB;
    this.miResultado.emit(resultado);
    this.val = "";
    this.miValor.emit(this.val);
  }
  modulo():void {
    let resultado = this.operandoA % this.operandoB;
    this.miResultado.emit(resultado);
    if(resultado === 0) {
      this.val = "Par";
      this.miValor.emit(this.val);
    } else {
      this.val = "Impar";
      this.miValor.emit(this.val);
    }
  }

}
