import {
  createReducer,
  on,
  Action,
  ActionReducer,
  createSelector,
} from '@ngrx/store';
import { markBugCollected } from '../actions/bug-tracker.actions';
import { BUG_DATA } from '../../shared/models/constants';
import { Critter } from '../../shared/models/critter.model';
import { AppState } from '../../shared/models/app-state.model';

export interface BugTrackerState {
  bugs: { [key: number]: Critter };
}

export const initialState: BugTrackerState = {
  bugs: BUG_DATA,
};

export const selectBugTrackerState = (state: AppState) => state.bugTrackerState;

export const selectBugs = createSelector(
  selectBugTrackerState,
  (state: BugTrackerState) => state.bugs
);

const _bugTrackerReducer: ActionReducer<
  BugTrackerState,
  Action
> = createReducer(
  initialState,
  on(markBugCollected, (state, { critter }) => {
    console.log('ajec: marking bug collected: ' + JSON.stringify(critter));
    return {
      ...state,
      bugs: {
        ...state.bugs,
        [critter.index]: {
          ...state.bugs[critter.index],
          collected: true,
        },
      },
    };
  })
);

export function bugTrackerReducer(state, action): BugTrackerState {
  return _bugTrackerReducer(state, action);
}
