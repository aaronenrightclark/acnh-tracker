import { CollectibleType } from './../../shared/models/collectible.model';
import { TrackerActionFactory } from 'src/app/shared/actions';
import { createAction, props } from '@ngrx/store';
import { CardStyle } from '../../shared/models/collectible.model';

export const toggleSeaCreatureCollectedAction = TrackerActionFactory.createToggleCreatureCollectedAction(
  CollectibleType.SEA_CREATURE
);
export const updateSeaCreatureCollectionStateFromSessionAction = TrackerActionFactory.createUpdateCollectionStateFromSessionAction(
  CollectibleType.SEA_CREATURE
);

// TODO: refactor to factory approach
export const setSeaCreatureCardStyleAction = createAction(
  '[Sea Creature Tracker] Set Card Style',
  props<{ cardStyle: CardStyle }>()
);
