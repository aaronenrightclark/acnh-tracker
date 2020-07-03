import { CritterType } from '../../critter-tracker/models/critter-tracker.model';

export interface Critter {
  index: number;
  name: string;
  price: number;
  type: CritterType;
  monthsActive: ActivityWindow[]; // empty signifies all-year activity
  timesActive: ActivityWindow[]; // empty signifies all-day activity
  location: BugLocation[] | FishLocation[];
  caught: boolean;
  haveModel: boolean;
  size?: FishSize;
  notes?: string;
}

export interface ActivityWindow {
  start: number;
  end: number;
}

export enum BugLocation {
  UNDERGROUND,
  GROUND,
  FLYING,
  FLOWER,
  SHRUB,
  ROCK,
  TREE_TRUNK,
  TREE_COCONUT,
  TREE_STUMP,
  TREE_SHAKE,
  WATER_POND,
  WATER_RIVER,
  TRASH,
  ROTTEN_FOOD,
  VILLAGER,
  BEACH,
}

export enum FishLocation {
  SEA,
  PIER,
  SEA_RAINY,
  RIVER,
  RIVER_CLIFF,
  POND,
  POND_CLIFF,
}

export enum FishSize {
  SMALLEST,
  SMALL,
  MEDIUM,
  LARGE,
  LARGEST,
}
