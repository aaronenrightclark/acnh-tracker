import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureTrackerComponent } from './creature-tracker.component';

describe('CreatureTrackerComponent', () => {
  let component: CreatureTrackerComponent;
  let fixture: ComponentFixture<CreatureTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureTrackerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatureTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
