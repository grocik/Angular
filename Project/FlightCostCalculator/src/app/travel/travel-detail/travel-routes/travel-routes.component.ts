import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../../travel-route.model';

@Component({
  selector: 'app-travel-routes',
  templateUrl: './travel-routes.component.html',
  styleUrls: ['./travel-routes.component.css']
})
export class TravelRoutesComponent implements OnInit {
  
  @Input() list: Route;

  constructor() { }

  ngOnInit(): void {
  }

}
