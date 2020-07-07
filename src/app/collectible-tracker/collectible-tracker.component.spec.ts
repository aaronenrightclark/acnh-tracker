import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectibleTrackerComponent } from './collectible-tracker.component';

describe('CollectibleTrackerComponent', () => {
  let component: CollectibleTrackerComponent;
  let fixture: ComponentFixture<CollectibleTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectibleTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectibleTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
