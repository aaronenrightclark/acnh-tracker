import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Hemisphere, AppState } from '../shared/models/app-state.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { selectHemisphere } from '../shared/reducers/shared.reducer';
import { getCollectibleTrackerFilterStateSelector } from '../shared/helpers/reducer.helper';
import {
  selectCollectibleTracker,
  getCollectibleTrackerStateSelector,
} from '../shared/helpers/reducer.helper';
import {
  TRACKER_KEY,
  CollectibleTrackerKey,
} from '../shared/models/app-state.model';
import {
  getCollectionNameFilterSelector,
  getCollectionFiltersSelector,
  getCollectiblesSelector,
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
    @Inject(TRACKER_KEY) public trackerKey: CollectibleTrackerKey,
    public store: Store<AppState>
  ) {
    this.collection$ = this.store.pipe(
      map((state) =>
        getCollectiblesSelector(
          getCollectibleTrackerStateSelector(selectCollectibleTracker)
        )(state, this.trackerKey)
      ),
      filter((value) => !!value)
    );
    this.cardStyle$ = this.store.pipe(
      map((state) =>
        getCardStyleSelector(
          getCollectibleTrackerStateSelector(selectCollectibleTracker)
        )(state, this.trackerKey)
      )
    );

    this.store.subscribe((state) => {
      const something = getCollectionNameFilterSelector(
        getCollectionFiltersSelector(
          getCollectibleTrackerFilterStateSelector(selectCollectibleTracker)
        )
      )(state, this.trackerKey);
    });
    this.hemisphere$ = this.store.pipe(map((state) => selectHemisphere(state)));
    this.nameFilter$ = this.store.pipe(
      map((state) =>
        getCollectionNameFilterSelector(
          getCollectionFiltersSelector(
            getCollectibleTrackerFilterStateSelector(selectCollectibleTracker)
          )
        )(state, this.trackerKey)
      )
    );
    this.collectionStatusFilter$ = this.store.pipe(
      map((state) =>
        getCollectionFiltersSelector(
          getCollectibleTrackerFilterStateSelector(selectCollectibleTracker)
        )(state, this.trackerKey)
      ),
      map((filters) => filters[CollectionStatusFilterType.COLLECTIBLE])
    );
    this.modelStatusFilter$ = this.store.pipe(
      map((state) =>
        getCollectionFiltersSelector(
          getCollectibleTrackerFilterStateSelector(selectCollectibleTracker)
        )(state, this.trackerKey)
      ),
      map((filters) => filters[CollectionStatusFilterType.MODEL])
    );
    this.modelSuppliesStatusFilter$ = this.store.pipe(
      map((state) =>
        getCollectionFiltersSelector(
          getCollectibleTrackerFilterStateSelector(selectCollectibleTracker)
        )(state, this.trackerKey)
      ),
      map((filters) => filters[CollectionStatusFilterType.MODEL_SUPPLIES])
    );
  }

  ngOnInit(): void {}
}
