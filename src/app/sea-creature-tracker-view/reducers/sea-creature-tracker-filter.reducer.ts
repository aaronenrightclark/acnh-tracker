import { CollectionStatusFilterType } from '../../shared/models/filter.model';
import { CollectionSubset } from '../../shared/models/collectible.model';
import {
  AppState,
  CollectibleTrackerFilterState,
  CollectibleTrackerFilters,
} from '../../shared/models/app-state.model';
import { createSelector, createReducer, on } from '@ngrx/store';
import { SeaCreatureTrackerFilterActions } from '../actions';

export const initialState: CollectibleTrackerFilterState = {
  filters: {
    [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
    partialName: '',
  },
};

export const selectSeaCreatureTrackerFilterState = (state: AppState) =>
  state.seaCreatureTrackerFilterState;

export const selectSeaCreatureFilters = createSelector(
  selectSeaCreatureTrackerFilterState,
  (state: CollectibleTrackerFilterState) => {
    return state.filters;
  }
);

export const selectSeaCreatureCollectionStatusFilter = createSelector(
  selectSeaCreatureFilters,
  (
    filters: CollectibleTrackerFilters,
    props: { filterType: CollectionStatusFilterType }
  ) => filters[props.filterType]
);

export const selectSeaCreatureNameFilter = createSelector(
  selectSeaCreatureFilters,
  (filters: CollectibleTrackerFilters) => {
    return filters.partialName;
  }
);

const _seaCreatureTrackerFilterReducer = createReducer(
  initialState,
  on(
    SeaCreatureTrackerFilterActions.filterSeaCreaturesByNameAction,
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
    SeaCreatureTrackerFilterActions.setSeaCreatureCollectionStatusFilterAction,
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
  on(
    SeaCreatureTrackerFilterActions.resetSeaCreatureFilterStateAction,
    (state) => {
      return initialState;
    }
  )
);

export function seaCreatureTrackerFilterReducer(
  state,
  action
): CollectibleTrackerFilterState {
  return _seaCreatureTrackerFilterReducer(state, action);
}
