import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personaje } from 'src/app/interfaces/personaje';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private datos: PersonajesService, private router: Router) { }

  ngOnInit() {
    const personaje: Personaje = this.datos.getPersonajePorId(2);
    console.log(`=> ${personaje.nombre}`);
  }

  public mostrarDetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }

}
