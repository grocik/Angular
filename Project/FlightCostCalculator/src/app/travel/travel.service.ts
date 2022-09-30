import { Travel } from "./travel.model";
import { EventEmitter } from "@angular/core"

export class TravelService{
  day: number = 0;

    travels: Travel[] = [];

    travelSelected = new EventEmitter<Travel>();
    travelListEdited = new EventEmitter<boolean>();

      addNewTravel(){
        this.travels.push(new Travel(this.day));
        this.day++;
      }

      getTravels(){
        return this.travels.slice();
      }

}