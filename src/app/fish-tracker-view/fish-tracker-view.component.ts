import { Component, OnInit, Inject } from '@angular/core';
import {
  CollectionSubset,
  Collectible,
} from '../shared/models/collectible.model';
import { Store } from '@ngrx/store';
import {
  AppState,
  Hemisphere,
  TRACKER_STATE_KEY,
  TRACKER_FILTER_STATE_KEY,
} from '../shared/models/app-state.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { FishTrackerActions, FishTrackerFilterActions } from './actions';
import { SharedTrackerActions } from '../shared/actions';
import { CardStyle } from '../shared/models/collectible.model';
import { CollectibleTrackerViewComponent } from '../collectible-tracker-view/collectible-tracker-view.component';
import { TRACKER_KEY } from '../shared/models/app-state.model';

@Component({
  selector: 'app-fish-tracker-view',
  templateUrl: './fish-tracker-view.component.html',
  styleUrls: ['./fish-tracker-view.component.css'],
})
export class FishTrackerViewComponent extends CollectibleTrackerViewComponent
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
