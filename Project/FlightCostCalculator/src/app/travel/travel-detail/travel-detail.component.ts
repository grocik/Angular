import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Route } from '../travel-route.model';
import { Travel } from '../travel.model';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {
  @Input() route : Travel;

  @ViewChild('cityInput') cityRef: ElementRef;
  @ViewChild('streetInput') streetRef: ElementRef;
  @ViewChild('departureInput') departureRef: ElementRef;
  @ViewChild('arrivalInput') arrivalRef: ElementRef;
  @ViewChild('toTheCityInput') toTheCityRef: ElementRef;
  @ViewChild('toTheStreetInput') toTheStreetRef: ElementRef;
  @ViewChild('priceInput') priceRef: ElementRef;
  @ViewChild('objectiveInput') objectiveRef: ElementRef;
  @ViewChild('typeInput') typeRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddRoute (){

    const travelCity = this.cityRef.nativeElement.value;
    const travelStreet = this.streetRef.nativeElement.value;
    const travelDeparture = this.departureRef.nativeElement.value;
    const travelArrival = this.arrivalRef.nativeElement.value;
    const travelCityTo = this.toTheCityRef.nativeElement.value;
    const travelStreetTo = this.toTheStreetRef.nativeElement.value;
    const travelPrice = this.priceRef.nativeElement.value;
    const travelObjective = this.objectiveRef.nativeElement.value;
    const travelType = this.typeRef.nativeElement.value;

    if(travelCity && 
      travelStreet && 
      travelDeparture && 
      travelArrival && 
      travelCityTo && 
      travelStreetTo && 
      travelPrice &&
      travelObjective &&
      travelType != ""){

        this.route.addNewRoute(new Route(
          travelCity,
          travelStreet,
          travelDeparture,
          travelArrival,
          travelCityTo,
          travelStreetTo,
          travelPrice,
          travelObjective,
          travelType)
        )
      }
      else {
        alert("Please fill in all fields ")
      }
  }
}
