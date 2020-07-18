import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishTrackerViewComponent } from './fish-tracker-view.component';
import { AppState } from '../shared/models/app-state.model';
import {
  CardStyle,
  CollectionSubset,
} from '../shared/models/collectible.model';
import { provideMockStore } from '@ngrx/store/testing';
import { CollectionStatusFilterType } from '../shared/models/filter.model';

fdescribe('FishTrackerViewComponent', () => {
  let component: FishTrackerViewComponent;
  let fixture: ComponentFixture<FishTrackerViewComponent>;

  const initialState = {
    fishTrackerState: {
      collectibles: {},
      encoded: '',
      cardStyle: CardStyle.DETAILS,
    },
    fishTrackerFilterState: {
      filters: {
        [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
        [CollectionStatusFilterType.MODEL]: CollectionSubset.ALL,
        [CollectionStatusFilterType.MODEL_SUPPLIES]: CollectionSubset.ALL,
        partialName: '',
      },
    },
  } as AppState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FishTrackerViewComponent],
      providers: [provideMockStore({ initialState })],
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
