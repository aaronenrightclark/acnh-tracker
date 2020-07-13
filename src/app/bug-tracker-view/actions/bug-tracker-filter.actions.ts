import { props, createAction, union } from '@ngrx/store';

export const filterBugsByNameAction = createAction(
  '[Bug Tracker] Filter by Name',
  props<{ partialName: string }>()
);
export const updateBugNameFilterStateAction = createAction(
  '[Bug Tracker] Update Name Filter State',
  props<{ filtered: number[] }>()
);
export const resetBugFilterStateAction = createAction(
  '[Bug Tracker] Reset Filter State'
);
