import { CollectibleTrackerFilterState } from '../../shared/models/app-state.model';
import { createReducer, on } from '@ngrx/store';
import { BugTrackerFilterActions } from '../actions';
import { CollectionSubset } from '../../shared/models/collectible.model';
import { CollectionStatusFilterType } from '../../shared/models/filter.model';

export const initialState: CollectibleTrackerFilterState = {
  filters: {
    [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
    [CollectionStatusFilterType.MODEL]: CollectionSubset.ALL,
    [CollectionStatusFilterType.MODEL_SUPPLIES]: CollectionSubset.ALL,
    partialName: '',
  },
};

const bugTrackerFilterReducer = createReducer(
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

export function reducer(state, action): CollectibleTrackerFilterState {
  return bugTrackerFilterReducer(state, action);
}
