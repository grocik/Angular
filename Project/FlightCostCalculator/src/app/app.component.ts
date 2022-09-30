import { Component } from '@angular/core';
import { ValueFromArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TripPlanner';
  value:number;


  changePage(value: number){
    this.value = value;
  }
}
