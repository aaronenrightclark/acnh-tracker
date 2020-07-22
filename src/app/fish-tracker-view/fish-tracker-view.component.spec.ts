import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishTrackerViewComponent } from './fish-tracker-view.component';
import {
  AppState,
  Hemisphere,
  TRACKER_KEY,
  CollectibleTrackerKey,
} from '../shared/models/app-state.model';
import {
  CardStyle,
  CollectionSubset,
} from '../shared/models/collectible.model';
import { provideMockStore } from '@ngrx/store/testing';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { CollectionFiltersComponent } from '../collection-filters/collection-filters.component';
import { MockComponent } from 'ng-mocks';
import { HemisphereToggleComponent } from '../hemisphere-toggle/hemisphere-toggle.component';
import { CollectedFilterToggleComponent } from '../collected-filter-toggle/collected-filter-toggle.component';
import { CreatureTrackerComponent } from '../creature-tracker/creature-tracker.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FishTrackerViewComponent', () => {
  let component: FishTrackerViewComponent;
  let fixture: ComponentFixture<FishTrackerViewComponent>;

  const initialState = {
    fishTracker: {
      trackerState: {
        collectibles: {},
        encoded: '',
        cardStyle: CardStyle.DETAILS,
      },
      trackerFilterState: {
        filters: {
          [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
          [CollectionStatusFilterType.MODEL]: CollectionSubset.ALL,
          [CollectionStatusFilterType.MODEL_SUPPLIES]: CollectionSubset.ALL,
          partialName: '',
        },
      },
    },
    sharedTrackerState: {
      hemisphere: Hemisphere.NORTH,
    },
  } as AppState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FishTrackerViewComponent],
      providers: [
        provideMockStore({ initialState }),
        MockComponent(CollectionFiltersComponent),
        MockComponent(CollectedFilterToggleComponent),
        MockComponent(HemisphereToggleComponent),
        MockComponent(CreatureTrackerComponent),
        { provide: TRACKER_KEY, useValue: CollectibleTrackerKey.FISH },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
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
