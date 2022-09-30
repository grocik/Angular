import { Component, OnInit } from '@angular/core';
import { Accomodation } from '../accomodation.model';
import { accomodationItem } from './accomodationItem.model';

@Component({
  selector: 'app-accomodation-detail',
  templateUrl: './accomodation-detail.component.html',
  styleUrls: ['./accomodation-detail.component.css']
})
export class AccomodationDetailComponent implements OnInit {
  accomodationItems: accomodationItem[] = [
    new accomodationItem("Gdańsk","sunny","12-09-2022","16-09-2022",244)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
