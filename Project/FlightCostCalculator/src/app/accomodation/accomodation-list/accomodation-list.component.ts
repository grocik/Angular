import { Component, OnInit } from '@angular/core';
import { Accomodation } from '../accomodation.model';

@Component({
  selector: 'app-accomodation-list',
  templateUrl: './accomodation-list.component.html',
  styleUrls: ['./accomodation-list.component.css']
})
export class AccomodationListComponent implements OnInit {

  accomodations: Accomodation[] = [
    new Accomodation("Greece",
    "tomasza",
    200,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/600px-Flag_of_Greece.svg.png",
    "12-09-2022/14-09-2022")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
