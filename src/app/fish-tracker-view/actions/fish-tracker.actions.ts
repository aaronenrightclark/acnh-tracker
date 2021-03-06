import { createAction, props } from '@ngrx/store';
import { Collectible, CardStyle } from '../../shared/models/collectible.model';
import { SessionCategoryData } from '../../shared/models/app-state.model';

export const toggleFishCollectedAction = createAction(
  '[Fish Tracker] Toggle Collected',
  props<{ collectible: Collectible }>()
);
export const toggleFishModelObtainedAction = createAction(
  '[Fish Tracker] Toggle Model Obtained',
  props<{ collectible: Collectible }>()
);
export const toggleHaveFishModelSuppliesAction = createAction(
  '[Fish Tracker] Have Model Supplies',
  props<{ collectible: Collectible }>()
);
export const updateFishCollectionStateFromSessionAction = createAction(
  '[Fish Tracker] Update Collection State from Session',
  props<{ data: SessionCategoryData }>()
);
export const updateFishModelStateFromSessionAction = createAction(
  '[Fish Tracker] Update Model State from Session',
  props<{ data: SessionCategoryData }>()
);
export const updateHaveFishModelSuppliesStateFromSessionAction = createAction(
  '[Fish Tracker] Update Have Model Supplies State from Session',
  props<{ data: SessionCategoryData }>()
);
export const setFishCardStyleAction = createAction(
  '[Fish Tracker] Set Card Style',
  props<{ cardStyle: CardStyle }>()
);
