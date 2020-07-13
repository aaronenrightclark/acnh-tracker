import { createAction, props } from '@ngrx/store';
import { CollectionStatusFilterType } from '../../shared/models/filter.model';
import { CollectionSubset } from '../../shared/models/collectible.model';

export const filterFishByNameAction = createAction(
  '[Fish Tracker] Filter by Name',
  props<{ partialName: string }>()
);
export const setFishCollectionStatusFilterAction = createAction(
  '[Fish Tracker] Set Collection Status',
  props<{
    collectionType: CollectionStatusFilterType;
    subset: CollectionSubset;
  }>()
);
export const resetFishFilterStateAction = createAction(
  '[Fish Tracker] Reset Filter State'
);
