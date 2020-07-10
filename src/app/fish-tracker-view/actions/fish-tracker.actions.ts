import { createAction, props } from '@ngrx/store';
import { Critter } from '../../shared/models/critter.model';
import { SessionCategoryData } from '../../shared/models/app-state.model';

export const toggleFishCollectedAction = createAction(
  '[Fish Tracker] Toggle Collected',
  props<{ critter: Critter }>()
);
export const toggleFishModelObtainedAction = createAction(
  '[Fish Tracker] Toggle Model Obtained',
  props<{ critter: Critter }>()
);
export const toggleHaveFishModelSuppliesAction = createAction(
  '[Fish Tracker] Have Model Supplies',
  props<{ critter: Critter }>()
);
export const updateFishCollectionStateFromSessionAction = createAction(
  '[Fish Tracker] Update Collection State from Session',
  props<{ fishCollectionData: SessionCategoryData }>()
);
export const updateFishModelStateFromSessionAction = createAction(
  '[Fish Tracker] Update Model State from Session',
  props<{ fishModelData: SessionCategoryData }>()
);
export const updateHaveFishModelSuppliesStateFromSessionAction = createAction(
  '[Fish Tracker] Update Have Model Supplies State from Session',
  props<{ haveFishSuppliesData: SessionCategoryData }>()
);
