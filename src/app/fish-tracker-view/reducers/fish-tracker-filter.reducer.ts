import { CollectionStatusFilterType } from '../../shared/models/filter.model';
import { CollectionSubset } from '../../shared/models/collectible.model';
import { CollectibleTrackerFilterState } from '../../shared/models/app-state.model';
import { createReducer, on } from '@ngrx/store';
import { FishTrackerFilterActions } from '../actions';

export const initialState: CollectibleTrackerFilterState = {
  filters: {
    [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
    [CollectionStatusFilterType.MODEL]: CollectionSubset.ALL,
    [CollectionStatusFilterType.MODEL_SUPPLIES]: CollectionSubset.ALL,
    partialName: '',
  },
};

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
