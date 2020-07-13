import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Creature } from '../shared/models/collectible.model';
import { selectBugs } from './reducers/bug-tracker.reducer';
import { Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState, Hemisphere } from '../shared/models/app-state.model';
import { toggleHaveBugModelSuppliesAction } from './actions/bug-tracker.actions';
import {
  filterBugsByNameAction,
  resetBugFilterStateAction,
} from './actions/bug-tracker-filter.actions';
import { selectFilterIntersection } from './reducers/bug-tracker-filter.reducer';
import { selectHemisphere } from '../shared/reducers/shared.reducer';
import {
  toggleBugCollectedAction,
  toggleBugModelObtainedAction,
} from './actions/bug-tracker.actions';
import { SharedTrackerActions } from '../shared/actions';

@Component({
  selector: 'app-bug-tracker-view',
  templateUrl: './bug-tracker-view.component.html',
  styleUrls: ['./bug-tracker-view.component.css'],
})
export class BugTrackerViewComponent implements OnInit {
  creatures$: Observable<{ [key: number]: Creature }>;
  hemisphere$: Observable<Hemisphere>;

  constructor(private store: Store<AppState>) {
    this.creatures$ = combineLatest([
      this.store.pipe(
        map((state) => selectBugs(state)),
        filter((value) => !!value)
      ),
      this.store.pipe(map((state) => selectFilterIntersection(state))),
    ]).pipe(
      map(([bugs, filterIntersection]) => {
        if (filterIntersection) {
          const filteredBugs = {} as { [key: string]: Creature };
          filterIntersection.forEach((index) => {
            if (bugs[index]) {
              filteredBugs[index] = bugs[index];
            }
          });
          console.log(
            'returning filtered bugs: ' + JSON.stringify(filteredBugs)
          );
          return filteredBugs;
        } else {
          return bugs;
        }
      })
    );
    this.hemisphere$ = this.store.pipe(map((state) => selectHemisphere(state)));
  }

  ngOnInit(): void {}

  // onFilterByName(indices: number[]) {
  //   console.log('filtered indices: ' + JSON.stringify(indices));
  // }
  onFilterByName(partialName: string) {
    console.log('dispatching filter action for partialName: ' + partialName);
    this.store.dispatch(filterBugsByNameAction({ partialName }));
  }

  toggleBugCollected(bug: Creature) {
    this.store.dispatch(toggleBugCollectedAction({ bug }));
  }

  toggleBugModelCollected(bug: Creature) {
    this.store.dispatch(toggleBugModelObtainedAction({ bug }));
  }

  toggleHaveBugModelSupplies(bug: Creature) {
    this.store.dispatch(toggleHaveBugModelSuppliesAction({ bug }));
  }

  resetFilters() {
    this.store.dispatch(resetBugFilterStateAction());
  }

  setHemisphereToggleValue(hemisphere: Hemisphere) {
    this.store.dispatch(
      SharedTrackerActions.setHemisphereToggleValue({ hemisphere })
    );
  }
}
