import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { v } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ChavoService {

  private personajes: Personaje[] = [
    { nombre: 'Barriga', descripcion: '', edad: 50, imagen: '/assets/img/barriga.png', id: 1 },
    { nombre: 'Bruja 70', descripcion: '', edad: 70, imagen: '/assets/img/bruja.png', id: 1 },
    { nombre: 'Chavo', descripcion: '', edad: 12, imagen: '/assets/img/chavo.png', id: 2 },
    { nombre: 'Don Ramon', descripcion: '', edad: 50, imagen: '/assets/img/donramon.png', id: 3 },
    { nombre: 'Doña Flora', descripcion: '', edad: 50, imagen: '/assets/img/florinda.png', id: 4 },
    { nombre: 'Godinez', descripcion: '', edad: 12, imagen: '/assets/img/godinez.png', id: 5 },
    { nombre: 'Jaime', descripcion: '', edad: 70, imagen: '/assets/img/jaimito.png', id: 6 },
    { nombre: 'Profe. Longaniza', descripcion: '', edad: 50, imagen: '/assets/img/longaniza.png', id: 7 },
    { nombre: 'Mama Paty', descripcion: '', edad: 50, imagen: '/assets/img/mamaPaty.png', id: 8 },
    { nombre: 'Ñoño', descripcion: '', edad: 12, imagen: '/assets/img/nono.png', id: 9 },
    { nombre: 'Paty', descripcion: '', edad: 11, imagen: '/assets/img/paty.png', id: 10 },
    { nombre: 'Popis', descripcion: '', edad: 10, imagen: '/assets/img/popis.png', id: 11 },
    { nombre: 'Quico', descripcion: '', edad: 13, imagen: '/assets/img/quico.png', id: 12 }
  ];

  constructor() { }

  public getPersonajes() {
    return this.personajes;
  }

}
