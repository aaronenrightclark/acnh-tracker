import { SharedTrackerState } from '../reducers/shared.reducer';
import { Collectible, CollectionSubset } from './collectible.model';
import { CollectionStatusFilterType } from './filter.model';

export interface CollectibleTrackerState {
  collectibles: { [key: string]: Collectible };
  encoded: string;
}

export interface CollectibleTrackerFilters {
  partialName: string;
  [CollectionStatusFilterType.COLLECTIBLE]: CollectionSubset;
  [CollectionStatusFilterType.MODEL]?: CollectionSubset;
  [CollectionStatusFilterType.MODEL_SUPPLIES]?: CollectionSubset;
}

export interface CollectibleTrackerFilterState {
  filters: CollectibleTrackerFilters;
}

export interface AppState {
  bugTrackerState: CollectibleTrackerState;
  bugTrackerFilterState: CollectibleTrackerFilterState;
  fishTrackerState: CollectibleTrackerState;
  fishTrackerFilterState: CollectibleTrackerFilterState;
  seaCreatureTrackerState: CollectibleTrackerState;
  seaCreatureTrackerFilterState: CollectibleTrackerFilterState;
  songTrackerState: CollectibleTrackerState;
  songTrackerFilterState: CollectibleTrackerFilterState;
  sharedTrackerState: SharedTrackerState;
}

export enum TrackerCategory {
  BUG_COLLECTION,
  BUG_MODELS,
  BUG_MODEL_SUPPLIES,
  FISH_COLLECTION,
  FISH_MODELS,
  FISH_MODEL_SUPPLIES,
  SEA_CREATURE_COLLECTION,
  SONGS,
}

export interface SessionCategoryData {
  inclusive: boolean;
  indices: number[];
}

export type SessionData = {
  [key in TrackerCategory]?: SessionCategoryData;
};

export enum Hemisphere {
  NORTH,
  SOUTH,
}
