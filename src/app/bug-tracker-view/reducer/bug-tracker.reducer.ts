import {
  createReducer,
  on,
  Action,
  ActionReducer,
  createSelector,
} from '@ngrx/store';
import {
  toggleBugCollectedAction,
  toggleBugModelObtainedAction,
} from '../actions/bug-tracker.actions';
import { BUG_DATA } from '../../shared/models/constants';
import { Critter } from '../../shared/models/critter.model';
import { AppState, TrackerCategory } from '../../shared/models/app-state.model';
import {
  updateBugCollectionStateFromSessionAction,
  updateBugModelStateFromSessionAction,
} from '../actions/bug-tracker.actions';

export interface BugTrackerState {
  bugs: { [key: number]: Critter };
  encoded: string;
}

const initialState: BugTrackerState = {
  bugs: BUG_DATA,
  encoded: '0-1-.1-1-',
};

export const selectBugTrackerState = (state: AppState) => state.bugTrackerState;

export const selectBugs = createSelector(
  selectBugTrackerState,
  (state: BugTrackerState) => state.bugs
);

const getEncodedState = (bugs: { [key: number]: Critter }): string => {
  const sessionData = {};
  const collected = new Array<number>();
  const uncollected = new Array<number>();
  const haveModels = new Array<number>();
  const missingModels = new Array<number>();
  Object.keys(bugs).forEach((key) => {
    bugs[key].collected ? collected.push(+key) : uncollected.push(+key);
    bugs[key].haveModel ? haveModels.push(+key) : missingModels.push(+key);
    sessionData[TrackerCategory.BUG_COLLECTION] = {
      inclusive: collected.length <= uncollected.length,
      indices: collected.length <= uncollected.length ? collected : uncollected,
    };
    sessionData[TrackerCategory.BUG_MODELS] = {
      inclusive: haveModels.length <= missingModels.length,
      indices:
        haveModels.length <= missingModels.length ? haveModels : missingModels,
    };
  });
  let encodedSession = '';
  Object.keys(sessionData).forEach((key) => {
    let encodedSessionCategory = key;
    encodedSessionCategory += `-${+sessionData[key].inclusive}`;
    encodedSessionCategory += `-${sessionData[key].indices.join(',')}`;
    if (!!encodedSession) {
      encodedSession += '.';
    }
    encodedSession += encodedSessionCategory;
  });
  return encodedSession;
};

const _bugTrackerReducer: ActionReducer<
  BugTrackerState,
  Action
> = createReducer(
  initialState,
  on(toggleBugCollectedAction, (state, { critter }) => {
    console.log('toggling bug collected: ' + JSON.stringify(critter));
    const updated = {
      ...state,
      bugs: {
        ...state.bugs,
        [critter.index]: {
          ...state.bugs[critter.index],
          collected: !state.bugs[critter.index].collected,
        },
      },
    };
    updated.encoded = getEncodedState(updated.bugs);
    return updated;
  }),
  on(toggleBugModelObtainedAction, (state, { critter }) => {
    console.log('toggling bug model obtained: ' + JSON.stringify(critter));
    const updated = {
      ...state,
      bugs: {
        ...state.bugs,
        [critter.index]: {
          ...state.bugs[critter.index],
          haveModel: !state.bugs[critter.index].haveModel,
        },
      },
    };
    updated.encoded = getEncodedState(updated.bugs);
    return updated;
  }),
  on(
    updateBugCollectionStateFromSessionAction,
    (state, { bugCollectionData }) => {
      console.log(
        'updating bug collection state from session data: ' +
          JSON.stringify(bugCollectionData)
      );
      const updated = JSON.parse(JSON.stringify(state));
      // const updated = {...state};
      for (const key of Object.keys(state.bugs)) {
        updated.bugs[key] = {
          ...state.bugs[key],
        } as Critter;
        updated.bugs[key].collected = bugCollectionData.inclusive
          ? bugCollectionData.indices.indexOf(+key) > -1
          : bugCollectionData.indices.indexOf(+key) < 0;
      }
      updated.encoded = getEncodedState(updated.bugs);
      return updated;
    }
  ),
  on(updateBugModelStateFromSessionAction, (state, { bugModelData }) => {
    console.log(
      'updating bug model state from session data: ' +
        JSON.stringify(bugModelData)
    );
    // const updated = {...state};
    const updated = JSON.parse(JSON.stringify(state));
    for (const key of Object.keys(state.bugs)) {
      updated.bugs[key] = {
        ...state.bugs[key],
      } as Critter;
      updated.bugs[key].haveModel = bugModelData.inclusive
        ? bugModelData.indices.indexOf(+key) > -1
        : bugModelData.indices.indexOf(+key) < 0;
    }
    updated.encoded = getEncodedState(updated.bugs);
    return updated;
  })
);

export function bugTrackerReducer(state, action): BugTrackerState {
  return _bugTrackerReducer(state, action);
}
