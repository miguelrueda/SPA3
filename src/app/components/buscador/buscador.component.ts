import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  constructor(private router: Router, private activated: ActivatedRoute) { }

  ngOnInit() {
  }

  buscarPersonaje(termino: string) {
    console.log(termino);
    if (termino !== '') {
      this.router.navigate(['/buscar'], {
        relativeTo: this.activated,
        queryParams: {
          search: termino
        }
      });
    } else {
      this.router.navigate(['/buscar']);
    }
    termino = '';
  }

}
