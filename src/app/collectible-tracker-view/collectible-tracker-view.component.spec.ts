import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectibleTrackerViewComponent } from './collectible-tracker-view.component';
import { provideMockStore } from '@ngrx/store/testing';
import {
  CardStyle,
  CollectionSubset,
} from '../shared/models/collectible.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { AppState } from '../shared/models/app-state.model';
import {
  CollectibleTrackerKey,
  TRACKER_KEY,
} from '../shared/models/app-state.model';

describe('CollectibleTrackerViewComponent', () => {
  let component: CollectibleTrackerViewComponent;
  let fixture: ComponentFixture<CollectibleTrackerViewComponent>;

  const initialState = {
    songTracker: {
      trackerState: {
        collectibles: {},
        encoded: '',
        cardStyle: CardStyle.DETAILS,
      },
      trackerFilterState: {
        filters: {
          [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
          partialName: '',
        },
      },
    },
  } as AppState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectibleTrackerViewComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: TRACKER_KEY, useValue: CollectibleTrackerKey.SONGS },
      ],
    }).compileComponents();
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
