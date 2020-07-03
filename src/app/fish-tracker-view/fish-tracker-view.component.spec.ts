import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishTrackerViewComponent } from './fish-tracker-view.component';

describe('FishTrackerViewComponent', () => {
  let component: FishTrackerViewComponent;
  let fixture: ComponentFixture<FishTrackerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishTrackerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishTrackerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
