import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Creature } from '../shared/models/collectible.model';
import { selectBugs } from './reducers/bug-tracker.reducer';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from '../shared/models/app-state.model';
import { toggleHaveBugModelSuppliesAction } from './actions/bug-tracker.actions';
import {
  toggleBugCollectedAction,
  toggleBugModelObtainedAction,
} from './actions/bug-tracker.actions';

@Component({
  selector: 'app-bug-tracker-view',
  templateUrl: './bug-tracker-view.component.html',
  styleUrls: ['./bug-tracker-view.component.css'],
})
export class BugTrackerViewComponent implements OnInit {
  creatures$: Observable<{ [key: number]: Creature }>;

  constructor(private store: Store<AppState>) {
    this.creatures$ = this.store.pipe(
      map((state) => selectBugs(state)),
      filter((value) => !!value)
    );
  }

  ngOnInit(): void {}

  toggleBugCollected(bug: Creature) {
    this.store.dispatch(toggleBugCollectedAction({ bug }));
  }

  toggleBugModelCollected(bug: Creature) {
    this.store.dispatch(toggleBugModelObtainedAction({ bug }));
  }

  toggleHaveBugModelSupplies(bug: Creature) {
    this.store.dispatch(toggleHaveBugModelSuppliesAction({ bug }));
  }
}
