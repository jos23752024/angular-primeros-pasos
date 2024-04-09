import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajeComponent } from '../personaje/personaje.component';
import { AgregarComponent } from '../agregar/agregar.component';
import { Character } from '../../_model/object-model';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',

  imports: [FormsModule, PersonajeComponent, AgregarComponent],
})
export class MainPageComponent {
  servicesService = inject(ServicesService);

  @Input() nuevo: Character = {
    id: '',
    nombre: '',
    poder: 0,
  };
}
