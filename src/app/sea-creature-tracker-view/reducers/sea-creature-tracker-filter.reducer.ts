import { CollectionStatusFilterType } from '../../shared/models/filter.model';
import { CollectionSubset } from '../../shared/models/collectible.model';
import { CollectibleTrackerFilterState } from '../../shared/models/app-state.model';
import { createReducer, on } from '@ngrx/store';
import { SeaCreatureTrackerFilterActions } from '../actions';

export const initialState: CollectibleTrackerFilterState = {
  filters: {
    [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
    partialName: '',
  },
};

const seaCreatureTrackerFilterReducer = createReducer(
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

export function reducer(state, action): CollectibleTrackerFilterState {
  return seaCreatureTrackerFilterReducer(state, action);
}
