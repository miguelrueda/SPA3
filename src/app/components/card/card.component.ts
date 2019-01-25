import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() personaje: Personaje;

  @Output() personajeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.personajeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  public mostrarDetalle(id: number) {
    // this.router.navigate(['/detalle', id]);
    this.personajeSeleccionado.emit(this.personaje.id);
  }

}
