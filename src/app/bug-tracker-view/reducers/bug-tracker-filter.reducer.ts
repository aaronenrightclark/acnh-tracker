import { AppState } from '../../shared/models/app-state.model';
import { createSelector, createReducer, on } from '@ngrx/store';
import { BugTrackerFilterActions } from '../actions';
import { CollectionSubset } from '../../shared/models/collectible.model';
import { CollectionStatusFilterType } from 'src/app/shared/models/filter.model';

export interface BugTrackerFilterState {
  filters: BugTrackerFilters;
}

export interface BugTrackerFilters {
  [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset;
  [CollectionStatusFilterType.MODEL]: CollectionSubset;
  [CollectionStatusFilterType.MODEL_SUPPLIES]: CollectionSubset;
  partialName: string;
}

export const initialState: BugTrackerFilterState = {
  filters: {
    [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
    [CollectionStatusFilterType.MODEL]: CollectionSubset.ALL,
    [CollectionStatusFilterType.MODEL_SUPPLIES]: CollectionSubset.ALL,
    partialName: '',
  },
};

export const selectBugTrackerFilterState = (state: AppState) =>
  state.bugTrackerFilterState;

export const selectBugFilters = createSelector(
  selectBugTrackerFilterState,
  (state: BugTrackerFilterState) => {
    return state.filters;
  }
);

export const selectCollectionStatusFilter = createSelector(
  selectBugFilters,
  (
    filters: BugTrackerFilters,
    props: { filterType: CollectionStatusFilterType }
  ) => filters[props.filterType]
);

export const selectBugNameFilter = createSelector(
  selectBugFilters,
  (filters: BugTrackerFilters) => {
    return filters.partialName;
  }
);

const _bugTrackerFilterReducer = createReducer(
  initialState,
  on(
    BugTrackerFilterActions.filterBugsByNameAction,
    (state, { partialName }) => {
      console.log('updating state for partial name: ' + partialName);
      return {
        ...state,
        filters: {
          ...state.filters,
          partialName,
        },
      };
    }
  ),
  on(
    BugTrackerFilterActions.setCollectionStatusFilterAction,
    (state, { collectionType, subset }) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          [collectionType]: subset,
        },
      };
    }
  ),
  on(BugTrackerFilterActions.resetBugFilterStateAction, (state) => {
    return initialState;
  })
);

export function bugTrackerFilterReducer(state, action): BugTrackerFilterState {
  return _bugTrackerFilterReducer(state, action);
}
