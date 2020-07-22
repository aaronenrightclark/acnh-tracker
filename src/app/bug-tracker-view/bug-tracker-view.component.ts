import { Component, OnInit, Injector, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CollectionSubset,
  Collectible,
  CardStyle,
} from '../shared/models/collectible.model';
import {
  AppState,
  Hemisphere,
  TRACKER_KEY,
} from '../shared/models/app-state.model';
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
    @Inject(TRACKER_KEY) public trackerKey,
    public store: Store<AppState>
  ) {
    super(trackerKey, store);
  }

  ngOnInit(): void {}

  onFilterByName(partialName: string): void {
    this.store.dispatch(
      BugTrackerFilterActions.filterBugsByNameAction({ partialName })
    );
  }

  toggleBugCollected(collectible: Collectible): void {
    this.store.dispatch(
      BugTrackerActions.toggleBugCollectedAction({ collectible })
    );
  }

  toggleBugCardStyle(cardStyle: CardStyle): void {
    this.store.dispatch(BugTrackerActions.setBugCardStyleAction({ cardStyle }));
  }

  toggleBugModelCollected(collectible: Collectible): void {
    this.store.dispatch(
      BugTrackerActions.toggleBugModelObtainedAction({ collectible })
    );
  }

  toggleHaveBugModelSupplies(collectible: Collectible): void {
    this.store.dispatch(
      BugTrackerActions.toggleHaveBugModelSuppliesAction({ collectible })
    );
  }

  resetFilters(): void {
    this.store.dispatch(BugTrackerFilterActions.resetBugFilterStateAction());
    this.reset = !this.reset; // value irrelevant, just triggers function
  }

  setHemisphereToggleValue(hemisphere: Hemisphere): void {
    this.store.dispatch(
      SharedTrackerActions.setHemisphereToggleValue({ hemisphere })
    );
  }

  setBugCollectionStatusStatusFilter(
    collectionType: CollectionStatusFilterType,
    subset: CollectionSubset
  ): void {
    this.store.dispatch(
      BugTrackerFilterActions.setBugCollectionStatusFilterAction({
        collectionType,
        subset,
      })
    );
  }
}
