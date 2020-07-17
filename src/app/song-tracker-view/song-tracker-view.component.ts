import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState, Hemisphere } from '../shared/models/app-state.model';
import {
  selectSongs,
  selectSongCardStyle,
} from './reducers/song-tracker.reducer';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  Collectible,
  CollectionSubset,
} from '../shared/models/collectible.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { SongTrackerFilterActions, SongTrackerActions } from './actions';
import { SharedTrackerActions } from '../shared/actions';
import { selectHemisphere } from '../shared/reducers/shared.reducer';
import { CardStyle } from '../shared/models/collectible.model';
import {
  selectSongNameFilter,
  selectSongCollectionStatusFilter,
} from './reducers/song-tracker-filter.reducer';

@Component({
  selector: 'app-song-tracker-view',
  templateUrl: './song-tracker-view.component.html',
  styleUrls: ['./song-tracker-view.component.css'],
})
export class SongTrackerViewComponent implements OnInit {
  CollectionStatusFilterType = CollectionStatusFilterType;

  songs$: Observable<{ [key: number]: Collectible }>;
  hemisphere$: Observable<Hemisphere>;
  collectionStatusFilter$: Observable<CollectionSubset>;
  nameFilter$: Observable<string>;
  cardStyle$: Observable<CardStyle>;

  reset = true;

  constructor(private store: Store<AppState>) {
    this.songs$ = this.store.pipe(
      map((state) => selectSongs(state)),
      filter((value) => !!value)
    );
    this.cardStyle$ = this.store.pipe(select(selectSongCardStyle));
    this.hemisphere$ = this.store.pipe(map((state) => selectHemisphere(state)));
    this.nameFilter$ = this.store.pipe(select(selectSongNameFilter));
    this.collectionStatusFilter$ = this.store.pipe(
      select(selectSongCollectionStatusFilter, {
        filterType: CollectionStatusFilterType.COLLECTIBLE,
      })
    );
  }

  ngOnInit(): void {}

  onFilterByName(partialName: string) {
    this.store.dispatch(
      SongTrackerFilterActions.filterSongsByNameAction({ partialName })
    );
  }

  toggleSongCollected(collectible: Collectible) {
    this.store.dispatch(
      SongTrackerActions.toggleSongCollectedAction({ collectible })
    );
  }

  toggleSongCardStyle(cardStyle: CardStyle) {
    this.store.dispatch(
      SongTrackerActions.setSongCardStyleAction({ cardStyle })
    );
  }

  resetFilters() {
    this.store.dispatch(SongTrackerFilterActions.resetSongFilterStateAction());
    this.reset = !this.reset; // value irrelevant, just triggers function
  }

  setHemisphereToggleValue(hemisphere: Hemisphere) {
    this.store.dispatch(
      SharedTrackerActions.setHemisphereToggleValue({ hemisphere })
    );
  }

  setSongCollectionStatusStatusFilter(
    collectionType: CollectionStatusFilterType,
    subset: CollectionSubset
  ) {
    this.store.dispatch(
      SongTrackerFilterActions.setSongCollectionStatusFilterAction({
        collectionType,
        subset,
      })
    );
  }
}
