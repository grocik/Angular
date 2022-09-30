import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() whereToNavigate =new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  navigateToAccomodation(){
    this.whereToNavigate.emit(1);
  }
  
  navigateToTravel(){
    this.whereToNavigate.emit(2);
  }

}
