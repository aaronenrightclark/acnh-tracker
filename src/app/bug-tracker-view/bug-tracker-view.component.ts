import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Creature, CollectionSubset } from '../shared/models/collectible.model';
import { selectBugs } from './reducers/bug-tracker.reducer';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState, Hemisphere } from '../shared/models/app-state.model';
import {
  filterBugsByNameAction,
  resetBugFilterStateAction,
} from './actions/bug-tracker-filter.actions';
import { selectHemisphere } from '../shared/reducers/shared.reducer';
import {
  toggleBugCollectedAction,
  toggleBugModelObtainedAction,
  toggleHaveBugModelSuppliesAction,
} from './actions/bug-tracker.actions';
import { SharedTrackerActions } from '../shared/actions';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { BugTrackerFilterActions } from './actions';
import { selectBugNameFilter } from './reducers/bug-tracker-filter.reducer';
import { selectBugCollectionStatusFilter } from './reducers/bug-tracker-filter.reducer';

@Component({
  selector: 'app-bug-tracker-view',
  templateUrl: './bug-tracker-view.component.html',
  styleUrls: ['./bug-tracker-view.component.css'],
})
export class BugTrackerViewComponent implements OnInit {
  CollectionStatusFilterType = CollectionStatusFilterType;

  creatures$: Observable<{ [key: number]: Creature }>;
  hemisphere$: Observable<Hemisphere>;
  collectionStatusFilter$: Observable<CollectionSubset>;
  modelStatusFilter$: Observable<CollectionSubset>;
  modelSuppliesStatusFilter$: Observable<CollectionSubset>;
  nameFilter$: Observable<string>;

  reset = true;

  constructor(private store: Store<AppState>) {
    this.creatures$ = this.store.pipe(
      map((state) => selectBugs(state)),
      filter((value) => !!value)
    );
    this.hemisphere$ = this.store.pipe(map((state) => selectHemisphere(state)));
    this.nameFilter$ = this.store.pipe(select(selectBugNameFilter));
    this.collectionStatusFilter$ = this.store.pipe(
      select(selectBugCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.COLLECTIBLE,
      })
    );
    this.modelStatusFilter$ = this.store.pipe(
      select(selectBugCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.MODEL,
      })
    );
    this.modelSuppliesStatusFilter$ = this.store.pipe(
      select(selectBugCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.MODEL_SUPPLIES,
      })
    );
  }

  ngOnInit(): void {}

  onFilterByName(partialName: string) {
    this.store.dispatch(filterBugsByNameAction({ partialName }));
  }

  toggleBugCollected(bug: Creature) {
    this.store.dispatch(toggleBugCollectedAction({ bug }));
  }

  toggleBugModelCollected(bug: Creature) {
    this.store.dispatch(toggleBugModelObtainedAction({ bug }));
  }

  toggleHaveBugModelSupplies(bug: Creature) {
    this.store.dispatch(toggleHaveBugModelSuppliesAction({ bug }));
  }

  resetFilters() {
    this.store.dispatch(resetBugFilterStateAction());
    this.reset = !this.reset; // value irrelevant, just triggers function
  }

  setHemisphereToggleValue(hemisphere: Hemisphere) {
    this.store.dispatch(
      SharedTrackerActions.setHemisphereToggleValue({ hemisphere })
    );
  }

  setBugCollectionStatusStatusFilter(
    collectionType: CollectionStatusFilterType,
    subset: CollectionSubset
  ) {
    this.store.dispatch(
      BugTrackerFilterActions.setBugCollectionStatusFilterAction({
        collectionType,
        subset,
      })
    );
  }
}
