import {
  AppState,
  CollectibleTrackerFilterState,
} from '../../shared/models/app-state.model';
import { createSelector, createReducer, on } from '@ngrx/store';
import { BugTrackerFilterActions } from '../actions';
import { CollectionSubset } from '../../shared/models/collectible.model';
import { CollectionStatusFilterType } from 'src/app/shared/models/filter.model';
import { CollectibleTrackerFilters } from '../../shared/models/app-state.model';

export const initialState: CollectibleTrackerFilterState = {
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
  (state: CollectibleTrackerFilterState) => {
    return state.filters;
  }
);

export const selectBugCollectionStatusFilter = createSelector(
  selectBugFilters,
  (
    filters: CollectibleTrackerFilters,
    props: { filterType: CollectionStatusFilterType }
  ) => filters[props.filterType]
);

export const selectBugNameFilter = createSelector(
  selectBugFilters,
  (filters: CollectibleTrackerFilters) => {
    return filters.partialName;
  }
);

const _bugTrackerFilterReducer = createReducer(
  initialState,
  on(
    BugTrackerFilterActions.filterBugsByNameAction,
    (state, { partialName }) => {
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
    BugTrackerFilterActions.setBugCollectionStatusFilterAction,
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

export function bugTrackerFilterReducer(
  state,
  action
): CollectibleTrackerFilterState {
  return _bugTrackerFilterReducer(state, action);
}
