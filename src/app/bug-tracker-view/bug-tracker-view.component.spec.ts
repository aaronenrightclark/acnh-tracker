import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugTrackerViewComponent } from './bug-tracker-view.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState, Hemisphere } from '../shared/models/app-state.model';
import {
  CardStyle,
  CollectionSubset,
} from '../shared/models/collectible.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockComponent } from 'ng-mocks';
import { CollectionFiltersComponent } from '../collection-filters/collection-filters.component';
import { CollectedFilterToggleComponent } from '../collected-filter-toggle/collected-filter-toggle.component';
import { HemisphereToggleComponent } from '../hemisphere-toggle/hemisphere-toggle.component';
import { CreatureTrackerComponent } from '../creature-tracker/creature-tracker.component';

describe('BugTrackerViewComponent', () => {
  let component: BugTrackerViewComponent;
  let fixture: ComponentFixture<BugTrackerViewComponent>;

  const initialState = {
    bugTrackerState: {
      collectibles: {},
      encoded: '',
      cardStyle: CardStyle.DETAILS,
    },
    bugTrackerFilterState: {
      filters: {
        [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
        [CollectionStatusFilterType.MODEL]: CollectionSubset.ALL,
        [CollectionStatusFilterType.MODEL_SUPPLIES]: CollectionSubset.ALL,
        partialName: '',
      },
    },
    sharedTrackerState: {
      hemisphere: Hemisphere.NORTH,
    },
  } as AppState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugTrackerViewComponent],
      providers: [
        provideMockStore({ initialState }),
        MockComponent(CollectionFiltersComponent),
        MockComponent(CollectedFilterToggleComponent),
        MockComponent(HemisphereToggleComponent),
        MockComponent(CreatureTrackerComponent),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
