import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = 'Ingeniero';
  mostrar = false;

  agregarPersona() {
    this.mostrar = true;
    this.mensaje = 'Persona agregada';
  }
  // Event Bindind (input)
  // modificarTitulo(event: Event) {
  //   console.log('Entrando a metodo modificar titulo');
  //   this.titulo = (<HTMLInputElement>event.target).value;
  // }

}
