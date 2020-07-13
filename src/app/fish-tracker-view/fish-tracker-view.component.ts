import { Component, OnInit } from '@angular/core';
import { selectFish } from './reducers/fish-tracker.reducer';
import { Creature, CollectionSubset } from '../shared/models/collectible.model';
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

@Component({
  selector: 'app-fish-tracker-view',
  templateUrl: './fish-tracker-view.component.html',
  styleUrls: ['./fish-tracker-view.component.css'],
})
export class FishTrackerViewComponent implements OnInit {
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
      map((state) => selectFish(state)),
      filter((value) => !!value)
    );
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

  toggleFishCollected(fish: Creature) {
    this.store.dispatch(FishTrackerActions.toggleFishCollectedAction({ fish }));
  }

  toggleFishModelCollected(fish: Creature) {
    this.store.dispatch(
      FishTrackerActions.toggleFishModelObtainedAction({ fish })
    );
  }

  toggleHaveFishModelSupplies(fish: Creature) {
    this.store.dispatch(
      FishTrackerActions.toggleHaveFishModelSuppliesAction({ fish })
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
