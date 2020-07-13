import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../../shared/models/app-state.model';
import { Store } from '@ngrx/store';
import { map, withLatestFrom, concatMap } from 'rxjs/operators';
import { selectBugs } from '../reducers/bug-tracker.reducer';
import { of } from 'rxjs';
import { BugTrackerFilterActions } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class BugTrackerEffects {
  constructor(private actions$: Actions, private store: Store<AppState>) {}

  filterByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BugTrackerFilterActions.filterBugsByNameAction),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.pipe(map((state) => selectBugs(state))))
        )
      ),
      map(([action, bugs]) => {
        console.log('filtering by name: ' + action.partialName);
        const filtered = Object.keys(bugs)
          .filter((key) =>
            bugs[key].name
              .toLowerCase()
              .replace(/(\s|')/g, '')
              .includes(action.partialName.toLowerCase().replace(/(\s|')/g, ''))
          )
          .map((key) => +key);
        return BugTrackerFilterActions.updateBugNameFilterStateAction({
          filtered,
        });
      })
    )
  );

  filterByBugsCollected$;
}
