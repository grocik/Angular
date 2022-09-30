import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationItemComponent } from './accomodation-item.component';

describe('AccomodationItemComponent', () => {
  let component: AccomodationItemComponent;
  let fixture: ComponentFixture<AccomodationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
