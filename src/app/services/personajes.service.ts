import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { v } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private personajes: Personaje[] = [
    { nombre: 'Barriga', descripcion: 'Papa de Alan', edad: 50, imagen: '/assets/img/barriga.png', id: 13 },
    { nombre: 'Bruja 70', descripcion: 'Ya esta senil', edad: 70, imagen: '/assets/img/bruja.png', id: 1 },
    { nombre: 'Chavo', descripcion: 'Intenta ser chido pero no le sale', edad: 12, imagen: '/assets/img/chavo.png', id: 2 },
    { nombre: 'Don Ramon', descripcion: 'Le va al Necaxa...', edad: 50, imagen: '/assets/img/donramon.png', id: 3 },
    { nombre: 'Doña Flora', descripcion: 'Anda sobre don ramon', edad: 50, imagen: '/assets/img/florinda.png', id: 4 },
    { nombre: 'Godinez', descripcion: 'Se pelea si le esconden sus tuppers', edad: 12, imagen: '/assets/img/godinez.png', id: 5 },
    { nombre: 'Jaime', descripcion: 'No sabe ni que onda', edad: 70, imagen: '/assets/img/jaimito.png', id: 6 },
    { nombre: 'Profe. Longaniza', descripcion: 'Trae la longaniza de fuera... de Toluca', edad: 50,
      imagen: '/assets/img/longaniza.png', id: 7 },
    { nombre: 'Mama Paty', descripcion: 'Es fresa', edad: 50, imagen: '/assets/img/mamaPaty.png', id: 8 },
    { nombre: 'Ñoño', descripcion: 'Se encuentra a dieta desde los 8', edad: 12, imagen: '/assets/img/nono.png', id: 9 },
    { nombre: 'Paty', descripcion: 'El crush de todos', edad: 11, imagen: '/assets/img/paty.png', id: 10 },
    { nombre: 'Popis', descripcion: 'La fresa sin dinero', edad: 10, imagen: '/assets/img/popis.png', id: 11 },
    { nombre: 'Quico', descripcion: 'Trabaja en ingenieria', edad: 13, imagen: '/assets/img/quico.png', id: 12 }
  ];

  constructor() { }

  public getPersonajes() {
    return this.personajes;
  }

  public getPersonajePorId(id: number): Personaje {
    return this.personajes.filter(x => x.id === id)[0];
  }

}
