import { Injectable } from '@angular/core';
import { Character } from '../../_model/object-model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}

  personajes: Character[] = [
    { id: uuid(), nombre: 'Neo', poder: 1000 },
    { id: uuid(), nombre: 'Morpheus', poder: 800 },
    { id: uuid(), nombre: 'Agent Smith', poder: 900 },
  ];

  onNuevoPersonaje(personaje: Character): void {
    const nuevoPersonaje: Character = { id: uuid(), ...personaje };
    this.personajes.push(nuevoPersonaje);
  }

  deleteCharacterById(id: string) {
    this.personajes = this.personajes.filter(
      (personaje) => personaje.id !== id
    );
  }
}
