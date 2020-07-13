import { AppState } from '../../shared/models/app-state.model';
import { createSelector, createReducer, on } from '@ngrx/store';
// import { updateBugNameFilterStateAction } from '../actions/bug-tracker-filter.actions';
import { BugTrackerFilterActions } from '../actions';

export interface BugTrackerFilterState {
  filters: {
    name?: number[];
    creatureCollected?: number[];
    modelCollected?: number[];
    modelSuppliesCollected?: number[];
  };
  intersection: number[] | null;
}

export const initialState = {
  filters: {},
  intersection: null,
};

export const selectBugTrackerFilterState = (state: AppState) =>
  state.bugTrackerFilterState;

export const selectFilterIntersection = createSelector(
  selectBugTrackerFilterState,
  (state: BugTrackerFilterState) => state.intersection
);

const _bugTrackerFilterReducer = createReducer(
  initialState,
  on(
    BugTrackerFilterActions.updateBugNameFilterStateAction,
    (state, { filtered }) => {
      const updated = {
        ...state,
        filters: {
          ...state.filters,
          name: filtered,
        },
      };
      updated.intersection = getFilterIntersection(updated.filters);
      return updated;
    }
  ),
  on(BugTrackerFilterActions.resetBugFilterStateAction, (state) => {
    return initialState;
  })
);

const getFilterIntersection = (filters: {
  [key: string]: number[];
}): number[] => {
  return Object.keys(filters)
    .map((key) => filters[key])
    .reduce((p, c) => p.filter((v) => c.includes(v)));
};

export function bugTrackerFilterReducer(state, action): BugTrackerFilterState {
  return _bugTrackerFilterReducer(state, action);
}
