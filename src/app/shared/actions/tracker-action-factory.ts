import { CollectibleType } from '../models/collectible.model';
import { createAction, props } from '@ngrx/store';
import { Collectible } from '../models/collectible.model';
import { SessionCategoryData } from '../models/app-state.model';

export const createToggleCreatureCollectedAction = (
  collectibleType: CollectibleType
) => {
  return createAction(
    `[${CollectibleType[collectibleType]} Tracker] Toggle Collected`,
    props<{ collectible: Collectible }>()
  );
};

export const createUpdateCollectionStateFromSessionAction = (
  collectibleType: CollectibleType
) => {
  return createAction(
    `[${CollectibleType[collectibleType]} Tracker] Update Collection State from Session`,
    props<{ data: SessionCategoryData }>()
  );
};
