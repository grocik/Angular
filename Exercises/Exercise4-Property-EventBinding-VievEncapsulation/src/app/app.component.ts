import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise4-Property-EventBinding-VievEncapsulation';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalTick(firedNumber: number){
    if(firedNumber % 2 === 0){
      this.oddNumbers.push(firedNumber);
    }
    else {
      this.evenNumbers.push(firedNumber);
    }

  }
}
