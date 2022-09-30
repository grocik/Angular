import { Component, OnInit } from '@angular/core';
import { Travel } from './travel.model';
import { TravelService } from './travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
  providers: []
})
export class TravelComponent implements OnInit {
  toShow: Travel;

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.travelSelected.subscribe(
      (travel: Travel) => {
        this.toShow = travel;
      }
    )
  }

}
