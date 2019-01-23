import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personaje } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  personaje: Personaje;

  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    private personajes: PersonajesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
      this.personaje = this.personajes.getPersonajePorId(+params['id'])
    );
  }

}
