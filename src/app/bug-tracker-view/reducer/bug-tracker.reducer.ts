import {
  createReducer,
  on,
  Action,
  ActionReducer,
  createSelector,
} from '@ngrx/store';
import { toggleBugCollectedAction } from '../actions/bug-tracker.actions';
import { BUG_DATA } from '../../shared/models/constants';
import { Critter } from '../../shared/models/critter.model';
import { AppState } from '../../shared/models/app-state.model';

export interface BugTrackerState {
  bugs: { [key: number]: Critter };
}

const initialState: BugTrackerState = {
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
  on(toggleBugCollectedAction, (state, { critter }) => {
    console.log('toggling bug collected: ' + JSON.stringify(critter));
    return {
      ...state,
      bugs: {
        ...state.bugs,
        [critter.index]: {
          ...state.bugs[critter.index],
          collected: !state.bugs[critter.index].collected,
        },
      },
    };
  })
);

export function bugTrackerReducer(state, action): BugTrackerState {
  return _bugTrackerReducer(state, action);
}
