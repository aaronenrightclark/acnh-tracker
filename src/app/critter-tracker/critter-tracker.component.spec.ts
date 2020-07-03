import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterTrackerComponent } from './critter-tracker.component';

describe('CritterTrackerComponent', () => {
  let component: CritterTrackerComponent;
  let fixture: ComponentFixture<CritterTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritterTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
