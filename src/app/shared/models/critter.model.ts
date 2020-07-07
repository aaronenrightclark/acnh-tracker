export interface Collectible {
  index: number;
  name: string;
  price: number;
  collected: boolean;
}

export interface Song extends Collectible {
  mood: SongMood;
}

export interface Critter extends Collectible {
  type: CritterType;
  monthsActive: ActivityWindow[]; // empty signifies all-year activity
  timesActive: ActivityWindow[]; // empty signifies all-day activity
  location: BugLocation[] | FishLocation[];
  haveModel: boolean;
  size?: FishSize;
  notes?: string;
  playerNotes?: number;
}

export interface ActivityWindow {
  start: number;
  end: number;
}

export enum SongMood {
  GRUMPY,
  LAID_BACK,
  REQUEST,
  GOOD,
  BLUE,
  HARD_TO_SAY,
  CHEERFUL_UPBEAT,
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
  RIVER_MOUTH,
  POND,
  POND_CLIFF,
}

export enum FishSize {
  SMALLEST,
  SMALL,
  MEDIUM,
  LARGE,
  LARGE_FIN,
  EXTRA_LARGE,
  LARGEST,
  LARGEST_FIN,
  NARROW,
}

export enum CritterType {
  BUG,
  FISH,
}
