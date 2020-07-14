import { createAction, props } from '@ngrx/store';
import { CollectionStatusFilterType } from '../../shared/models/filter.model';
import { CollectionSubset } from '../../shared/models/collectible.model';

export const filterSongsByNameAction = createAction(
  '[Song Tracker] Filter by Name',
  props<{ partialName: string }>()
);
export const setSongCollectionStatusFilterAction = createAction(
  '[Song Tracker] Set Collection Status',
  props<{
    collectionType: CollectionStatusFilterType;
    subset: CollectionSubset;
  }>()
);
export const resetSongFilterStateAction = createAction(
  '[Song Tracker] Reset Filter State'
);
