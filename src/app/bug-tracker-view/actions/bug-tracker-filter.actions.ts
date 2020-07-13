import { props, createAction, union } from '@ngrx/store';
import { CollectionSubset } from '../../shared/models/collectible.model';
import { CollectionStatusFilterType } from '../../shared/models/filter.model';

export const filterBugsByNameAction = createAction(
  '[Bug Tracker] Filter by Name',
  props<{ partialName: string }>()
);
// export const updateBugNameFilterStateAction = createAction(
//   '[Bug Tracker] Update Name Filter State',
//   props<{ filtered: number[] }>()
// );
export const setCollectionStatusFilterAction = createAction(
  '[Bug Tracker] Set Collection Status',
  props<{
    collectionType: CollectionStatusFilterType;
    subset: CollectionSubset;
  }>()
);
export const resetBugFilterStateAction = createAction(
  '[Bug Tracker] Reset Filter State'
);
