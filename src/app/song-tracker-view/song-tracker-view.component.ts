import { Store } from '@ngrx/store';
import { Component, OnInit, Inject } from '@angular/core';
import { AppState, TRACKER_KEY } from '../shared/models/app-state.model';
import {
  Collectible,
  CollectionSubset,
} from '../shared/models/collectible.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { SongTrackerFilterActions, SongTrackerActions } from './actions';
import { CardStyle } from '../shared/models/collectible.model';
import { CollectibleTrackerViewComponent } from '../collectible-tracker-view/collectible-tracker-view.component';

@Component({
  selector: 'app-song-tracker-view',
  templateUrl: './song-tracker-view.component.html',
  styleUrls: ['./song-tracker-view.component.css'],
})
export class SongTrackerViewComponent extends CollectibleTrackerViewComponent
  implements OnInit {
  CollectionStatusFilterType = CollectionStatusFilterType;

  reset = true;

  constructor(
    @Inject(TRACKER_KEY) public trackerKey,
    public store: Store<AppState>
  ) {
    super(trackerKey, store);
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
