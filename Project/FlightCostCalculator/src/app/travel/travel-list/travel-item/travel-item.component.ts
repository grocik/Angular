import { Component, OnInit, Input } from '@angular/core';
import { Travel } from '../../travel.model';
import { TravelService } from '../../travel.service';

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrls: ['./travel-item.component.css']
})
export class TravelItemComponent implements OnInit {
  @Input() travelItem: Travel;

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
  }

  showDetail(){
    this.travelService.travelSelected.emit(this.travelItem);
  }

}
