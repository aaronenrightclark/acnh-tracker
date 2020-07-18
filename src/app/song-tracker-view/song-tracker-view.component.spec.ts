import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { SongTrackerViewComponent } from './song-tracker-view.component';
import { AppState } from '../shared/models/app-state.model';
import {
  CardStyle,
  CollectionSubset,
} from '../shared/models/collectible.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { MockComponent } from 'ng-mocks';
import { CollectionFiltersComponent } from '../collection-filters/collection-filters.component';
import { CollectedFilterToggleComponent } from '../collected-filter-toggle/collected-filter-toggle.component';
import { CreatureTrackerComponent } from '../creature-tracker/creature-tracker.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SongTrackerViewComponent', () => {
  let component: SongTrackerViewComponent;
  let fixture: ComponentFixture<SongTrackerViewComponent>;

  const initialState = {
    songTrackerState: {
      collectibles: {},
      encoded: '',
      cardStyle: CardStyle.DETAILS,
    },
    songTrackerFilterState: {
      filters: {
        [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
        partialName: '',
      },
    },
  } as AppState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongTrackerViewComponent],
      providers: [
        provideMockStore({ initialState }),
        MockComponent(CollectionFiltersComponent),
        MockComponent(CollectedFilterToggleComponent),
        MockComponent(CreatureTrackerComponent),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTrackerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
