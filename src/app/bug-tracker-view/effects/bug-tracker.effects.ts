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
}
