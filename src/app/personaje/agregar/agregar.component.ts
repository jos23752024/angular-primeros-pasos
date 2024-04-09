import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Character } from '../../_model/object-model';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  // @Input() nuevo: Personaje = {
  nuevoPersonaje: Character = {
    nombre: '',
    poder: 0,
  };
  constructor(private servicesService: ServicesService) {}

  @Output()
  onNuevoPersonaje: EventEmitter<Character> = new EventEmitter();

  agregar() {
    console.log(this.nuevoPersonaje);
    if (this.nuevoPersonaje.nombre.length === 0) {
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0,
    };
  }
}
