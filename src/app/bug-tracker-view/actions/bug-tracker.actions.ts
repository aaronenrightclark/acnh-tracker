import { createAction, props } from '@ngrx/store';
import { Collectible, CardStyle } from '../../shared/models/collectible.model';
import { SessionCategoryData } from '../../shared/models/app-state.model';

export const toggleBugCollectedAction = createAction(
  '[Bug Tracker] Toggle Collected',
  props<{ collectible: Collectible }>()
);
export const toggleBugModelObtainedAction = createAction(
  '[Bug Tracker] Toggle Model Obtained',
  props<{ collectible: Collectible }>()
);
export const toggleHaveBugModelSuppliesAction = createAction(
  '[Bug Tracker] Have Model Supplies',
  props<{ collectible: Collectible }>()
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
export const setBugCardStyleAction = createAction(
  '[Bug Tracker] Set Card Style',
  props<{ cardStyle: CardStyle }>()
);
