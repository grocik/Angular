import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { TravelComponent } from './travel/travel.component';
import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { AccomodationListComponent } from './accomodation/accomodation-list/accomodation-list.component';
import { AccomodationDetailComponent } from './accomodation/accomodation-detail/accomodation-detail.component';
import { AccomodationEditComponent } from './accomodation/accomodation-list/accomodation-edit/accomodation-edit.component';
import { TravelEditComponent } from './travel/travel-list/travel-edit/travel-edit.component';
import { TravelDetailComponent } from './travel/travel-detail/travel-detail.component';
import { TravelItemComponent } from './travel/travel-list/travel-item/travel-item.component';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './shared/dropdown.directive';
import { TravelService } from './travel/travel.service';
import { TravelRoutesComponent } from './travel/travel-detail/travel-routes/travel-routes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccomodationComponent,
    TravelComponent,
    TravelListComponent,
    AccomodationListComponent,
    AccomodationDetailComponent,
    AccomodationEditComponent,
    TravelEditComponent,
    TravelDetailComponent,
    TravelItemComponent,
    DropDownDirective,
    TravelRoutesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TravelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
