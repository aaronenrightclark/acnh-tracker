import { CollectibleTrackerFilterState } from '../../shared/models/app-state.model';
import { CollectionStatusFilterType } from '../../shared/models/filter.model';
import { CollectionSubset } from '../../shared/models/collectible.model';
import { createReducer, on } from '@ngrx/store';
import { SongTrackerFilterActions } from '../actions';

export const initialState: CollectibleTrackerFilterState = {
  filters: {
    [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset.ALL,
    partialName: '',
  },
};

const _songTrackerFilterReducer = createReducer(
  initialState,
  on(
    SongTrackerFilterActions.filterSongsByNameAction,
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
    SongTrackerFilterActions.setSongCollectionStatusFilterAction,
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
  on(SongTrackerFilterActions.resetSongFilterStateAction, (state) => {
    return initialState;
  })
);

export function songTrackerFilterReducer(
  state,
  action
): CollectibleTrackerFilterState {
  return _songTrackerFilterReducer(state, action);
}
