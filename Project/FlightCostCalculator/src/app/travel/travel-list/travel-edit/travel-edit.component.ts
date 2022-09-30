import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../travel.service';

@Component({
  selector: 'app-travel-edit',
  templateUrl: './travel-edit.component.html',
  styleUrls: ['./travel-edit.component.css']
})
export class TravelEditComponent implements OnInit {

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
  }

  onAddItem(){
    this.travelService.addNewTravel()
    
      this.travelService.travelListEdited.emit(true);
  }


}
