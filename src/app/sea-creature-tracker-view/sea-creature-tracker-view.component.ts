import { Component, OnInit } from '@angular/core';
import {
  selectSeaCreatures,
  selectSeaCreatureCardStyle,
} from './reducers/sea-creature-tracker.reducer';
import { Observable } from 'rxjs';
import {
  CollectionSubset,
  Collectible,
  CardStyle,
} from '../shared/models/collectible.model';
import { Store, select } from '@ngrx/store';
import { AppState, Hemisphere } from '../shared/models/app-state.model';
import { map, filter } from 'rxjs/operators';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { selectHemisphere } from '../shared/reducers/shared.reducer';
import {
  selectSeaCreatureNameFilter,
  selectSeaCreatureCollectionStatusFilter,
} from './reducers/sea-creature-tracker-filter.reducer';
import {
  SeaCreatureTrackerActions,
  SeaCreatureTrackerFilterActions,
} from './actions';
import { SharedTrackerActions } from '../shared/actions';

@Component({
  selector: 'app-sea-creature-tracker-view',
  templateUrl: './sea-creature-tracker-view.component.html',
  styleUrls: ['./sea-creature-tracker-view.component.css'],
})
export class SeaCreatureTrackerViewComponent implements OnInit {
  CollectionStatusFilterType = CollectionStatusFilterType;

  seaCreatures$: Observable<{ [key: number]: Collectible }>;
  hemisphere$: Observable<Hemisphere>;
  collectionStatusFilter$: Observable<CollectionSubset>;
  modelStatusFilter$: Observable<CollectionSubset>;
  modelSuppliesStatusFilter$: Observable<CollectionSubset>;
  nameFilter$: Observable<string>;
  cardStyle$: Observable<CardStyle>;

  reset = true;

  constructor(private store: Store<AppState>) {
    this.seaCreatures$ = this.store.pipe(
      map((state) => selectSeaCreatures(state)),
      filter((value) => !!value)
    );
    this.cardStyle$ = this.store.pipe(select(selectSeaCreatureCardStyle));
    this.hemisphere$ = this.store.pipe(map((state) => selectHemisphere(state)));
    this.nameFilter$ = this.store.pipe(select(selectSeaCreatureNameFilter));
    this.collectionStatusFilter$ = this.store.pipe(
      select(selectSeaCreatureCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.COLLECTIBLE,
      })
    );
    this.modelStatusFilter$ = this.store.pipe(
      select(selectSeaCreatureCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.MODEL,
      })
    );
    this.modelSuppliesStatusFilter$ = this.store.pipe(
      select(selectSeaCreatureCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.MODEL_SUPPLIES,
      })
    );
  }

  ngOnInit(): void {}

  onFilterByName(partialName: string) {
    this.store.dispatch(
      SeaCreatureTrackerFilterActions.filterSeaCreaturesByNameAction({
        partialName,
      })
    );
  }

  toggleSeaCreatureCollected(collectible: Collectible) {
    this.store.dispatch(
      SeaCreatureTrackerActions.toggleSeaCreatureCollectedAction({
        collectible,
      })
    );
  }

  toggleSeaCreatureCardStyle(cardStyle: CardStyle) {
    this.store.dispatch(
      SeaCreatureTrackerActions.setSeaCreatureCardStyleAction({ cardStyle })
    );
  }

  resetFilters() {
    this.store.dispatch(
      SeaCreatureTrackerFilterActions.resetSeaCreatureFilterStateAction()
    );
    this.reset = !this.reset; // value irrelevant, just triggers function
  }

  setHemisphereToggleValue(hemisphere: Hemisphere) {
    this.store.dispatch(
      SharedTrackerActions.setHemisphereToggleValue({ hemisphere })
    );
  }

  setSeaCreatureCollectionStatusStatusFilter(
    collectionType: CollectionStatusFilterType,
    subset: CollectionSubset
  ) {
    this.store.dispatch(
      SeaCreatureTrackerFilterActions.setSeaCreatureCollectionStatusFilterAction(
        {
          collectionType,
          subset,
        }
      )
    );
  }
}
