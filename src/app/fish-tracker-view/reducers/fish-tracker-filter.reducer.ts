import { CollectionStatusFilterType } from '../../shared/models/filter.model';
import { CollectionSubset } from '../../shared/models/collectible.model';
import { AppState } from '../../shared/models/app-state.model';
import { createSelector, createReducer, on } from '@ngrx/store';
import { FishTrackerFilterActions } from '../actions';

export interface FishTrackerFilterState {
  filters: FishTrackerFilters;
}

export interface FishTrackerFilters {
  [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset;
  [CollectionStatusFilterType.MODEL]: CollectionSubset;
  [CollectionStatusFilterType.MODEL_SUPPLIES]: CollectionSubset;
  partialName: string;
}

export const initialState: FishTrackerFilterState = {
  filters: {
    [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
    [CollectionStatusFilterType.MODEL]: CollectionSubset.ALL,
    [CollectionStatusFilterType.MODEL_SUPPLIES]: CollectionSubset.ALL,
    partialName: '',
  },
};

export const selectFishTrackerFilterState = (state: AppState) =>
  state.fishTrackerFilterState;

export const selectFishFilters = createSelector(
  selectFishTrackerFilterState,
  (state: FishTrackerFilterState) => {
    return state.filters;
  }
);

export const selectFishCollectionStatusFilter = createSelector(
  selectFishFilters,
  (
    filters: FishTrackerFilters,
    props: { filterType: CollectionStatusFilterType }
  ) => filters[props.filterType]
);

export const selectFishNameFilter = createSelector(
  selectFishFilters,
  (filters: FishTrackerFilters) => {
    return filters.partialName;
  }
);

const _fishTrackerFilterReducer = createReducer(
  initialState,
  on(
    FishTrackerFilterActions.filterFishByNameAction,
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
    FishTrackerFilterActions.setFishCollectionStatusFilterAction,
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
  on(FishTrackerFilterActions.resetFishFilterStateAction, (state) => {
    return initialState;
  })
);

export function fishTrackerFilterReducer(
  state,
  action
): FishTrackerFilterState {
  return _fishTrackerFilterReducer(state, action);
}
