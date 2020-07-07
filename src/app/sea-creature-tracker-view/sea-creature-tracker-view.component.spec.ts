import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaCreatureTrackerViewComponent } from './sea-creature-tracker-view.component';

describe('SeaCreatureTrackerViewComponent', () => {
  let component: SeaCreatureTrackerViewComponent;
  let fixture: ComponentFixture<SeaCreatureTrackerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaCreatureTrackerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaCreatureTrackerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
