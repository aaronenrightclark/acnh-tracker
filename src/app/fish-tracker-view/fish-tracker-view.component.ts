import { Component, OnInit } from '@angular/core';
import { selectFish } from './reducer/fish-tracker.reducer';
import { Critter } from '../shared/models/critter.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/models/app-state.model';
import { map, filter } from 'rxjs/operators';
import {
  toggleFishCollectedAction,
  toggleFishModelObtainedAction,
  toggleHaveFishModelSuppliesAction,
} from './actions/fish-tracker.actions';

@Component({
  selector: 'app-fish-tracker-view',
  templateUrl: './fish-tracker-view.component.html',
  styleUrls: ['./fish-tracker-view.component.css'],
})
export class FishTrackerViewComponent implements OnInit {
  critters$: Observable<{ [key: number]: Critter }>;

  constructor(private store: Store<AppState>) {
    this.critters$ = this.store.pipe(
      map((state) => selectFish(state)),
      filter((value) => !!value)
    );
  }

  ngOnInit(): void {}

  toggleFishCollected(fish: Critter) {
    this.store.dispatch(toggleFishCollectedAction({ critter: fish }));
  }

  toggleFishModelCollected(fish: Critter) {
    this.store.dispatch(toggleFishModelObtainedAction({ critter: fish }));
  }

  toggleHaveFishModelSupplies(fish: Critter) {
    this.store.dispatch(toggleHaveFishModelSuppliesAction({ critter: fish }));
  }
}
