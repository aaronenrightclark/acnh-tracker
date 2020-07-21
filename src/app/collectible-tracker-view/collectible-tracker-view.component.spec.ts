import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectibleTrackerViewComponent } from './collectible-tracker-view.component';

describe('CollectibleTrackerViewComponent', () => {
  let component: CollectibleTrackerViewComponent;
  let fixture: ComponentFixture<CollectibleTrackerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectibleTrackerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectibleTrackerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
