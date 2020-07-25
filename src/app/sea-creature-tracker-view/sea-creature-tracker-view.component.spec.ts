import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaCreatureTrackerViewComponent } from './sea-creature-tracker-view.component';
import {
  CardStyle,
  CollectionSubset,
} from '../shared/models/collectible.model';
import {
  Hemisphere,
  AppState,
  TRACKER_KEY,
  CollectibleTrackerKey,
} from '../shared/models/app-state.model';
import { provideMockStore } from '@ngrx/store/testing';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { MockComponent } from 'ng-mocks';
import { CollectionFiltersComponent } from '../collection-filters/collection-filters.component';
import { CollectedFilterToggleComponent } from '../collected-filter-toggle/collected-filter-toggle.component';
import { HemisphereToggleComponent } from '../hemisphere-toggle/hemisphere-toggle.component';
import { CreatureTrackerComponent } from '../creature-tracker/creature-tracker.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SeaCreatureTrackerViewComponent', () => {
  let component: SeaCreatureTrackerViewComponent;
  let fixture: ComponentFixture<SeaCreatureTrackerViewComponent>;

  const initialState = {
    seaCreatureTracker: {
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
    sharedTrackerState: {
      hemisphere: Hemisphere.NORTH,
    },
  } as AppState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeaCreatureTrackerViewComponent],
      providers: [
        provideMockStore({ initialState }),
        MockComponent(CollectionFiltersComponent),
        MockComponent(CollectedFilterToggleComponent),
        MockComponent(HemisphereToggleComponent),
        MockComponent(CreatureTrackerComponent),
        { provide: TRACKER_KEY, useValue: CollectibleTrackerKey.SEA_CREATURES },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
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
