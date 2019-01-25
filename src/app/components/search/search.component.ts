import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personaje } from 'src/app/interfaces/personaje';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private personajes: Personaje[];
  private termino = '';

  constructor(private datos: PersonajesService, private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {

      this.activated.queryParams.subscribe(params => {
        if (params['search']) {
          if (params['search'] !== '') {
            this.termino = params['search'];
            this.personajes = this.datos.buscarPersonajes(this.termino.toLowerCase());
          }
        } else {
          this.personajes = this.datos.getPersonajes();
        }
      });
  }

  public mostrarDetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }

}
