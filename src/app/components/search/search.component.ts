import { Component, OnInit } from '@angular/core';
import { ChavoService } from 'src/app/services/chavo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private datos: ChavoService) { }

  ngOnInit() {
  }

}
