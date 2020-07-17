import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  CollectionSubset,
  Collectible,
  CardStyle,
} from '../shared/models/collectible.model';
import { selectBugs, selectBugCardStyle } from './reducers/bug-tracker.reducer';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState, Hemisphere } from '../shared/models/app-state.model';
import { selectHemisphere } from '../shared/reducers/shared.reducer';
import { SharedTrackerActions } from '../shared/actions';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { BugTrackerFilterActions, BugTrackerActions } from './actions';
import { selectBugNameFilter } from './reducers/bug-tracker-filter.reducer';
import { selectBugCollectionStatusFilter } from './reducers/bug-tracker-filter.reducer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bug-tracker-view',
  templateUrl: './bug-tracker-view.component.html',
  styleUrls: ['./bug-tracker-view.component.css'],
})
export class BugTrackerViewComponent implements OnInit {
  CollectionStatusFilterType = CollectionStatusFilterType;

  bugs$: Observable<{ [key: number]: Collectible }>;
  hemisphere$: Observable<Hemisphere>;
  collectionStatusFilter$: Observable<CollectionSubset>;
  modelStatusFilter$: Observable<CollectionSubset>;
  modelSuppliesStatusFilter$: Observable<CollectionSubset>;
  nameFilter$: Observable<string>;
  cardStyle$: Observable<CardStyle>;

  reset = true;

  subscriptions = new Array<Subscription>();

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.bugs$ = this.store.pipe(
      map((state) => selectBugs(state)),
      filter((value) => !!value)
    );
    this.cardStyle$ = this.store.pipe(select(selectBugCardStyle));
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
    this.store.dispatch(
      BugTrackerFilterActions.filterBugsByNameAction({ partialName })
    );
  }

  toggleBugCollected(collectible: Collectible) {
    this.store.dispatch(
      BugTrackerActions.toggleBugCollectedAction({ collectible })
    );
  }

  toggleBugCardStyle(cardStyle: CardStyle) {
    this.store.dispatch(BugTrackerActions.setBugCardStyleAction({ cardStyle }));
  }

  toggleBugModelCollected(collectible: Collectible) {
    this.store.dispatch(
      BugTrackerActions.toggleBugModelObtainedAction({ collectible })
    );
  }

  toggleHaveBugModelSupplies(collectible: Collectible) {
    this.store.dispatch(
      BugTrackerActions.toggleHaveBugModelSuppliesAction({ collectible })
    );
  }

  resetFilters() {
    this.store.dispatch(BugTrackerFilterActions.resetBugFilterStateAction());
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
