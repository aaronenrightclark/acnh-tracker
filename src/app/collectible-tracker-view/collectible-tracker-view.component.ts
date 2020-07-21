import { Component, OnInit, Injector, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import {
  Hemisphere,
  AppState,
  CollectibleTrackerFilterStateKey,
  CollectibleTrackerStateKey,
} from '../shared/models/app-state.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { selectHemisphere } from '../shared/reducers/shared.reducer';
import {
  TRACKER_STATE_KEY,
  TRACKER_FILTER_STATE_KEY,
} from '../shared/models/app-state.model';
import {
  getCollectionNameFilterSelector,
  getCollectionFiltersSelector,
  selectCollectibleTrackerFilterState,
  getCollectiblesSelector,
  selectCollectibleTrackerState,
  getCardStyleSelector,
} from '../shared/helpers/reducer.helper';
import {
  Collectible,
  CollectionSubset,
  CardStyle,
} from '../shared/models/collectible.model';

@Component({
  selector: 'app-collectible-tracker-view',
  templateUrl: './collectible-tracker-view.component.html',
  styleUrls: ['./collectible-tracker-view.component.css'],
})
export class CollectibleTrackerViewComponent implements OnInit {
  collection$: Observable<{ [key: number]: Collectible }>;
  hemisphere$: Observable<Hemisphere>;
  collectionStatusFilter$: Observable<CollectionSubset>;
  modelStatusFilter$: Observable<CollectionSubset>;
  modelSuppliesStatusFilter$: Observable<CollectionSubset>;
  nameFilter$: Observable<string>;
  cardStyle$: Observable<CardStyle>;

  constructor(
    @Inject(TRACKER_STATE_KEY)
    public trackerStateKey: CollectibleTrackerStateKey,
    @Inject(TRACKER_FILTER_STATE_KEY)
    public trackerFilterStateKey: CollectibleTrackerFilterStateKey,
    public store: Store<AppState>,
    public injector: Injector
  ) {
    this.collection$ = this.store.pipe(
      map((state) =>
        getCollectiblesSelector(selectCollectibleTrackerState)(
          state,
          this.trackerStateKey
        )
      ),
      filter((value) => !!value)
    );
    this.cardStyle$ = this.store.pipe(
      map((state) =>
        getCardStyleSelector(selectCollectibleTrackerState)(
          state,
          this.trackerStateKey
        )
      )
    );
    this.hemisphere$ = this.store.pipe(map((state) => selectHemisphere(state)));
    this.nameFilter$ = this.store.pipe(
      map((state) =>
        getCollectionNameFilterSelector(
          getCollectionFiltersSelector(selectCollectibleTrackerFilterState)
        )(state, this.trackerFilterStateKey)
      )
    );
    this.collectionStatusFilter$ = this.store.pipe(
      map((state) =>
        getCollectionFiltersSelector(selectCollectibleTrackerFilterState)(
          state,
          this.trackerFilterStateKey
        )
      ),
      map((filters) => filters[CollectionStatusFilterType.COLLECTIBLE])
    );
    this.modelStatusFilter$ = this.store.pipe(
      map((state) =>
        getCollectionFiltersSelector(selectCollectibleTrackerFilterState)(
          state,
          this.trackerFilterStateKey
        )
      ),
      map((filters) => filters[CollectionStatusFilterType.MODEL])
    );
    this.modelSuppliesStatusFilter$ = this.store.pipe(
      map((state) =>
        getCollectionFiltersSelector(selectCollectibleTrackerFilterState)(
          state,
          this.trackerFilterStateKey
        )
      ),
      map((filters) => filters[CollectionStatusFilterType.MODEL_SUPPLIES])
    );
  }

  ngOnInit(): void {}
}
