import { createAction, props } from '@ngrx/store';
import { Creature } from '../../shared/models/collectible.model';
import { SessionCategoryData } from '../../shared/models/app-state.model';

export const toggleSeaCreatureCollectedAction = createAction(
  '[Sea Creature Tracker] Toggle Collected',
  props<{ creature: Creature }>()
);
export const updateSeaCreatureCollectionStateFromSessionAction = createAction(
  '[Sea Creature Tracker] Update Collection State from Session',
  props<{ data: SessionCategoryData }>()
);
