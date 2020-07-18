import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugTrackerViewComponent } from './bug-tracker-view.component';
import { provideMockStore } from '@ngrx/store/testing';
import { CollectibleTrackerState } from '../shared/models/app-state.model';
import { CardStyle } from '../shared/models/collectible.model';

describe('BugTrackerViewComponent', () => {
  let component: BugTrackerViewComponent;
  let fixture: ComponentFixture<BugTrackerViewComponent>;

  const initialState: CollectibleTrackerState = {
    collectibles: {},
    encoded: '',
    cardStyle: CardStyle.DETAILS,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugTrackerViewComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
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
