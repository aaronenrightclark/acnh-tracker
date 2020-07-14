import { CollectibleType } from './../../shared/models/collectible.model';
import { TrackerActionFactory } from 'src/app/shared/actions';

// export const toggleSeaCreatureCollectedAction = createAction(
//   '[Sea Creature Tracker] Toggle Collected',
//   props<{ creature: Creature }>()
// );

export const toggleSeaCreatureCollectedAction = TrackerActionFactory.createToggleCreatureCollectedAction(
  CollectibleType.SEA_CREATURE
);

// export const updateSeaCreatureCollectionStateFromSessionAction = createAction(
//   '[Sea Creature Tracker] Update Collection State from Session',
//   props<{ data: SessionCategoryData }>()
// );

export const updateSeaCreatureCollectionStateFromSessionAction = TrackerActionFactory.createUpdateCollectionStateFromSessionAction(
  CollectibleType.SEA_CREATURE
);
