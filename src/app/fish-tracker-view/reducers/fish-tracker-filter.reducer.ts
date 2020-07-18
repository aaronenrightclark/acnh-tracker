import { CollectionStatusFilterType } from '../../shared/models/filter.model';
import { CollectionSubset } from '../../shared/models/collectible.model';
import {
  AppState,
  CollectibleTrackerFilterState,
  CollectibleTrackerFilters,
} from '../../shared/models/app-state.model';
import { createSelector, createReducer, on } from '@ngrx/store';
import { FishTrackerFilterActions } from '../actions';

export const initialState: CollectibleTrackerFilterState = {
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
  (state: CollectibleTrackerFilterState) => {
    return state.filters;
  }
);

export const selectFishCollectionStatusFilter = createSelector(
  selectFishFilters,
  (
    filters: CollectibleTrackerFilters,
    props: { filterType: CollectionStatusFilterType }
  ) => filters[props.filterType]
);

export const selectFishNameFilter = createSelector(
  selectFishFilters,
  (filters: CollectibleTrackerFilters) => {
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
): CollectibleTrackerFilterState {
  return _fishTrackerFilterReducer(state, action);
}