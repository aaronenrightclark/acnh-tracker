import { createAction, props } from '@ngrx/store';
import { CollectionStatusFilterType } from '../../shared/models/filter.model';
import { CollectionSubset } from '../../shared/models/collectible.model';

export const filterSeaCreaturesByNameAction = createAction(
  '[Sea Creature Tracker] Filter by Name',
  props<{ partialName: string }>()
);
export const setSeaCreatureCollectionStatusFilterAction = createAction(
  '[Sea Creature Tracker] Set Collection Status',
  props<{
    collectionType: CollectionStatusFilterType;
    subset: CollectionSubset;
  }>()
);
export const resetSeaCreatureFilterStateAction = createAction(
  '[Sea Creature Tracker] Reset Filter State'
);
