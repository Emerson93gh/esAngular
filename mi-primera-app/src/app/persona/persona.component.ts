import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  //nombre: string = '';
  //apellido: string = '';
  // private edad: number = 29;

  // getEdad(): number {
  //   return this.edad;
  // }

  personas: Persona[] = [new Persona('Alexander', 'Solano'), new Persona('Armando', 'Solano')];

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push( persona1 );
  }

 }
