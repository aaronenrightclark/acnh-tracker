import { createAction, props } from '@ngrx/store';
import { Critter } from '../../shared/models/critter.model';
import { SessionCategoryData } from '../../shared/models/app-state.model';

export const toggleBugCollectedAction = createAction(
  '[Bug Tracker] Toggle Collected',
  props<{ critter: Critter }>()
);
export const toggleBugModelObtainedAction = createAction(
  '[Bug Tracker] Toggle Model Obtained',
  props<{ critter: Critter }>()
);
export const toggleHaveBugModelSuppliesAction = createAction(
  '[Bug Tracker] Have Model Supplies',
  props<{ critter: Critter }>()
);
export const updateBugCollectionStateFromSessionAction = createAction(
  '[Bug Tracker] Update Collection State from Session',
  props<{ bugCollectionData: SessionCategoryData }>()
);
export const updateBugModelStateFromSessionAction = createAction(
  '[Bug Tracker] Update Model State from Session',
  props<{ bugModelData: SessionCategoryData }>()
);
export const updateHaveBugModelSuppliesStateFromSessionAction = createAction(
  '[Bug Tracker] Update Have Model Supplies State from Session',
  props<{ haveBugSuppliesData: SessionCategoryData }>()
);
