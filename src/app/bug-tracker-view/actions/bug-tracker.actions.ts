import { createAction, props } from '@ngrx/store';
import { Creature } from '../../shared/models/collectible.model';
import { SessionCategoryData } from '../../shared/models/app-state.model';

export const toggleBugCollectedAction = createAction(
  '[Bug Tracker] Toggle Collected',
  props<{ bug: Creature }>()
);
export const toggleBugModelObtainedAction = createAction(
  '[Bug Tracker] Toggle Model Obtained',
  props<{ bug: Creature }>()
);
export const toggleHaveBugModelSuppliesAction = createAction(
  '[Bug Tracker] Have Model Supplies',
  props<{ bug: Creature }>()
);
export const updateBugCollectionStateFromSessionAction = createAction(
  '[Bug Tracker] Update Collection State from Session',
  props<{ data: SessionCategoryData }>()
);
export const updateBugModelStateFromSessionAction = createAction(
  '[Bug Tracker] Update Model State from Session',
  props<{ data: SessionCategoryData }>()
);
export const updateHaveBugModelSuppliesStateFromSessionAction = createAction(
  '[Bug Tracker] Update Have Model Supplies State from Session',
  props<{ data: SessionCategoryData }>()
);
