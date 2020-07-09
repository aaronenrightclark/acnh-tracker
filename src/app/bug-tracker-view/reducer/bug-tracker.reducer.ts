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
import {
  AppState,
  TrackerCategory,
  SessionCategoryData,
} from '../../shared/models/app-state.model';
import {
  toggleHaveBugModelSuppliesAction,
  updateHaveBugModelSuppliesStateFromSessionAction,
} from '../actions/bug-tracker.actions';
import {
  getDefaultEncoding,
  encodeSessionData,
} from '../../shared/services/collection-encoding.service';
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
  encoded: getDefaultEncoding([
    TrackerCategory.BUG_COLLECTION,
    TrackerCategory.BUG_MODELS,
    TrackerCategory.BUG_MODEL_SUPPLIES,
  ]),
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
  const haveModelSupplies = new Array<number>();
  const missingModelSupplies = new Array<number>();
  Object.keys(bugs).forEach((key) => {
    bugs[key].collected ? collected.push(+key) : uncollected.push(+key);
    bugs[key].haveModel ? haveModels.push(+key) : missingModels.push(+key);
    bugs[key].haveModelSupplies
      ? haveModelSupplies.push(+key)
      : missingModelSupplies.push(+key);
    sessionData[TrackerCategory.BUG_COLLECTION] = {
      inclusive: collected.length <= uncollected.length,
      indices: collected.length <= uncollected.length ? collected : uncollected,
    };
    sessionData[TrackerCategory.BUG_MODELS] = {
      inclusive: haveModels.length <= missingModels.length,
      indices:
        haveModels.length <= missingModels.length ? haveModels : missingModels,
    };
    sessionData[TrackerCategory.BUG_MODEL_SUPPLIES] = {
      inclusive: haveModelSupplies.length <= missingModelSupplies.length,
      indices:
        haveModelSupplies.length <= missingModelSupplies.length
          ? haveModelSupplies
          : missingModelSupplies,
    };
  });
  return encodeSessionData(sessionData);
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
    } as BugTrackerState;
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
    } as BugTrackerState;
    updated.encoded = getEncodedState(updated.bugs);
    return updated;
  }),
  on(toggleHaveBugModelSuppliesAction, (state, { critter }) => {
    console.log('toggling have bug model supplies: ' + JSON.stringify(critter));
    const updated = {
      ...state,
      bugs: {
        ...state.bugs,
        [critter.index]: {
          ...state.bugs[critter.index],
          haveModelSupplies: !state.bugs[critter.index].haveModelSupplies,
        },
      },
    } as BugTrackerState;
    updated.encoded = getEncodedState(updated.bugs);
    return updated;
  }),
  on(
    updateBugCollectionStateFromSessionAction,
    (state, { bugCollectionData }) =>
      getUpdatedBugStateForProperty(state, bugCollectionData, 'collected')
  ),
  on(updateBugModelStateFromSessionAction, (state, { bugModelData }) =>
    getUpdatedBugStateForProperty(state, bugModelData, 'haveModel')
  ),
  on(
    updateHaveBugModelSuppliesStateFromSessionAction,
    (state, { haveBugSuppliesData }) =>
      getUpdatedBugStateForProperty(
        state,
        haveBugSuppliesData,
        'haveModelSupplies'
      )
  )
);

export function getUpdatedBugStateForProperty(
  state: BugTrackerState,
  data: SessionCategoryData,
  propName: string
): BugTrackerState {
  console.log(
    `updating ${propName} state from session data: ` + JSON.stringify(data)
  );
  const updated = JSON.parse(JSON.stringify(state)) as BugTrackerState;
  for (const key of Object.keys(state.bugs)) {
    updated.bugs[key] = {
      ...state.bugs[key],
    } as Critter;
    updated.bugs[key][propName] = data.inclusive
      ? data.indices.indexOf(+key) > -1
      : data.indices.indexOf(+key) < 0;
  }
  updated.encoded = getEncodedState(updated.bugs);
  return updated;
}

export function bugTrackerReducer(state, action): BugTrackerState {
  return _bugTrackerReducer(state, action);
}
