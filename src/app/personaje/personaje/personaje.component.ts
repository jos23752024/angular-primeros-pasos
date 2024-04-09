import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { Character } from '../../_model/object-model';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [MainPageComponent],
  templateUrl: './personaje.component.html',
})
export class PersonajeComponent {
  //  @Input(require:true) personajes: Personaje[] = [];
  // get personajes() {
  //   return this.services.Service.personajes;
  // }
  @Input()
  listadopersonajes: Character[] = [
    {
      id: '',
      nombre: 'Neo',
      poder: 1000,
    },
  ];

  // index!: number;

  get personajes(): Character[] {
    return [...this.listadopersonajes];
  }

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }

  // onDeletePersonaje(index: number): void {
  //   // if (!index) return;
  //   this.onDelete.emit(index);
  // }
  // agregarPersonaje(personaje: Personaje) {
  //   this._personajes.push(personaje);
  // }

  constructor() {}
}
