import { Component, OnInit} from '@angular/core';
import { Travel } from '../travel.model';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
  travels: Travel[];

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travels = this.travelService.getTravels();

    this.travelService.travelListEdited.subscribe(
      (isEdited: Boolean) => {
        this.travels = this.travelService.getTravels();
      }
    )
  }

}
