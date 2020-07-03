import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugTrackerViewComponent } from './bug-tracker-view.component';

describe('BugTrackerViewComponent', () => {
  let component: BugTrackerViewComponent;
  let fixture: ComponentFixture<BugTrackerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugTrackerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugTrackerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
