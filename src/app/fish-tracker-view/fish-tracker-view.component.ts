import { Component, OnInit } from '@angular/core';
import {
  selectFish,
  selectFishCardStyle,
} from './reducers/fish-tracker.reducer';
import {
  CollectionSubset,
  Collectible,
} from '../shared/models/collectible.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, Hemisphere } from '../shared/models/app-state.model';
import { map, filter } from 'rxjs/operators';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { selectHemisphere } from '../shared/reducers/shared.reducer';
import {
  selectFishNameFilter,
  selectFishCollectionStatusFilter,
} from './reducers/fish-tracker-filter.reducer';
import { FishTrackerActions, FishTrackerFilterActions } from './actions';
import { SharedTrackerActions } from '../shared/actions';
import { CardStyle } from '../shared/models/collectible.model';

@Component({
  selector: 'app-fish-tracker-view',
  templateUrl: './fish-tracker-view.component.html',
  styleUrls: ['./fish-tracker-view.component.css'],
})
export class FishTrackerViewComponent implements OnInit {
  CollectionStatusFilterType = CollectionStatusFilterType;

  fish$: Observable<{ [key: number]: Collectible }>;
  hemisphere$: Observable<Hemisphere>;
  collectionStatusFilter$: Observable<CollectionSubset>;
  modelStatusFilter$: Observable<CollectionSubset>;
  modelSuppliesStatusFilter$: Observable<CollectionSubset>;
  nameFilter$: Observable<string>;
  cardStyle$: Observable<CardStyle>;

  reset = true;

  constructor(private store: Store<AppState>) {
    this.fish$ = this.store.pipe(
      map((state) => selectFish(state)),
      filter((value) => !!value)
    );
    this.cardStyle$ = this.store.pipe(select(selectFishCardStyle));
    this.hemisphere$ = this.store.pipe(map((state) => selectHemisphere(state)));
    this.nameFilter$ = this.store.pipe(select(selectFishNameFilter));
    this.collectionStatusFilter$ = this.store.pipe(
      select(selectFishCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.COLLECTIBLE,
      })
    );
    this.modelStatusFilter$ = this.store.pipe(
      select(selectFishCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.MODEL,
      })
    );
    this.modelSuppliesStatusFilter$ = this.store.pipe(
      select(selectFishCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.MODEL_SUPPLIES,
      })
    );
  }

  ngOnInit(): void {}

  onFilterByName(partialName: string) {
    this.store.dispatch(
      FishTrackerFilterActions.filterFishByNameAction({ partialName })
    );
  }

  toggleFishCollected(collectible: Collectible) {
    this.store.dispatch(
      FishTrackerActions.toggleFishCollectedAction({ collectible })
    );
  }

  toggleFishCardStyle(cardStyle: CardStyle) {
    this.store.dispatch(
      FishTrackerActions.setFishCardStyleAction({ cardStyle })
    );
  }

  toggleFishModelCollected(collectible: Collectible) {
    this.store.dispatch(
      FishTrackerActions.toggleFishModelObtainedAction({ collectible })
    );
  }

  toggleHaveFishModelSupplies(collectible: Collectible) {
    this.store.dispatch(
      FishTrackerActions.toggleHaveFishModelSuppliesAction({ collectible })
    );
  }

  resetFilters() {
    this.store.dispatch(FishTrackerFilterActions.resetFishFilterStateAction());
    this.reset = !this.reset; // value irrelevant, just triggers function
  }

  setHemisphereToggleValue(hemisphere: Hemisphere) {
    this.store.dispatch(
      SharedTrackerActions.setHemisphereToggleValue({ hemisphere })
    );
  }

  setFishCollectionStatusStatusFilter(
    collectionType: CollectionStatusFilterType,
    subset: CollectionSubset
  ) {
    this.store.dispatch(
      FishTrackerFilterActions.setFishCollectionStatusFilterAction({
        collectionType,
        subset,
      })
    );
  }
}
