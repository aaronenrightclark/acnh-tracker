import { Component, OnInit, Injector, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CollectionSubset,
  Collectible,
  CardStyle,
} from '../shared/models/collectible.model';
import { AppState, Hemisphere } from '../shared/models/app-state.model';
import { SharedTrackerActions } from '../shared/actions';
import { CollectionStatusFilterType } from '../shared/models/filter.model';
import { BugTrackerFilterActions, BugTrackerActions } from './actions';
import { CollectibleTrackerViewComponent } from '../collectible-tracker-view/collectible-tracker-view.component';
import {
  TRACKER_STATE_KEY,
  TRACKER_FILTER_STATE_KEY,
} from '../shared/models/app-state.model';

@Component({
  selector: 'app-bug-tracker-view',
  templateUrl: './bug-tracker-view.component.html',
  styleUrls: ['./bug-tracker-view.component.css'],
})
export class BugTrackerViewComponent extends CollectibleTrackerViewComponent
  implements OnInit {
  CollectionStatusFilterType = CollectionStatusFilterType;

  reset = true;

  constructor(
    @Inject(TRACKER_STATE_KEY) public trackerStateKey,
    @Inject(TRACKER_FILTER_STATE_KEY) public trackerFilterStateKey,
    public store: Store<AppState>,
    public injector: Injector
  ) {
    super(trackerStateKey, trackerFilterStateKey, store, injector);
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
