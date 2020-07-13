import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Creature, CollectionSubset } from '../shared/models/collectible.model';
import { Hemisphere } from '../shared/models/app-state.model';

@Component({
  selector: 'app-creature-tracker',
  templateUrl: './creature-tracker.component.html',
  styleUrls: ['./creature-tracker.component.css'],
})
export class CreatureTrackerComponent implements OnInit, OnChanges {
  _creatures: Creature[] = [];
  @Input() set creatures(creatures: { [key: string]: Creature }) {
    this._creatures = Object.keys(creatures).map((key) => creatures[key]);
  }
  @Input() hemisphere: Hemisphere;
  @Input() creatureCollectionSubset: CollectionSubset;
  @Input() modelCollectionSubset: CollectionSubset;
  @Input() modelSuppliesCollectionSubset: CollectionSubset;
  @Input() partialName: string;

  @Output() creatureCollected: EventEmitter<Creature> = new EventEmitter();
  @Output() creatureModelCollected: EventEmitter<Creature> = new EventEmitter();
  @Output() haveCreatureModelSupplies: EventEmitter<
    Creature
  > = new EventEmitter();

  filteredCreatures: Creature[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredCreatures = this._creatures
      .filter(
        this.filterByCollectionSubset(
          this.creatureCollectionSubset,
          'collected'
        )
      )
      .filter(
        this.filterByCollectionSubset(this.modelCollectionSubset, 'haveModel')
      )
      .filter(
        this.filterByCollectionSubset(
          this.modelSuppliesCollectionSubset,
          'haveModelSupplies'
        )
      )
      .filter(this.filterByName());
  }

  filterByCollectionSubset(
    collectionSubset: CollectionSubset,
    property: string
  ) {
    return (creature: Creature) => {
      return (
        collectionSubset === CollectionSubset.ALL ||
        creature[property] === undefined ||
        (collectionSubset === CollectionSubset.COLLECTED &&
          creature[property]) ||
        (collectionSubset === CollectionSubset.UNCOLLECTED &&
          !creature[property])
      );
    };
  }

  filterByName() {
    return (creature: Creature) => {
      return (
        !this.partialName ||
        creature.name
          .toLowerCase()
          .replace(/(\s|')/g, '')
          .includes(this.partialName.toLowerCase().replace(/(\s|')/g, ''))
      );
    };
  }

  markCreatureCollected(critter) {
    this.creatureCollected.emit(critter);
  }

  markCreatureModelCollected(critter) {
    this.creatureModelCollected.emit(critter);
  }

  markHaveCreatureModelSupplies(critter) {
    this.haveCreatureModelSupplies.emit(critter);
  }
}
