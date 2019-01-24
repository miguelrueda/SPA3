import { Component, OnInit } from '@angular/core';
import { query } from '@angular/core/src/render3/query';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  query = '';

  constructor(private router: Router, private activated: ActivatedRoute) { }

  ngOnInit() {
  }

  updateQuery(value) {
    this.query = value;
  }

  buscar(event) {
    event.preventDefault();
    if (this.query !== '') {
      this.router.navigate(['/buscar'], {
        relativeTo: this.activated,
        queryParams: {
          search: this.query
        }
      });
      this.query = '';
    }
  }

}
