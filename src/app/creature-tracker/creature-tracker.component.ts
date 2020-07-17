import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  CollectionSubset,
  Collectible,
} from '../shared/models/collectible.model';
import { Hemisphere } from '../shared/models/app-state.model';
import { CardStyle } from '../shared/models/collectible.model';
import {
  COLLECTIBLE_KEY_COLLECTED,
  COLLECTIBLE_KEY_HAVE_MODEL,
  COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES,
} from '../shared/models/collectible.model';

@Component({
  selector: 'app-creature-tracker',
  templateUrl: './creature-tracker.component.html',
  styleUrls: ['./creature-tracker.component.scss'],
})
export class CreatureTrackerComponent implements OnInit, OnChanges {
  CardStyle = CardStyle;

  _collectibles: Collectible[] = [];
  @Input() set collectibles(collectibles: { [key: string]: Collectible }) {
    this._collectibles = Object.keys(collectibles).map(
      (key) => collectibles[key]
    );
  }
  @Input() hemisphere: Hemisphere;
  @Input() collectibleCollectionSubset: CollectionSubset;
  @Input() modelCollectionSubset: CollectionSubset;
  @Input() modelSuppliesCollectionSubset: CollectionSubset;
  @Input() partialName: string;
  @Input() cardStyle: CardStyle;

  @Output() collectibleCollected: EventEmitter<
    Collectible
  > = new EventEmitter();
  @Output() collectibleModelCollected: EventEmitter<
    Collectible
  > = new EventEmitter();
  @Output() haveCollectibleModelSupplies: EventEmitter<
    Collectible
  > = new EventEmitter();
  @Output() selectedCardStyle: EventEmitter<CardStyle> = new EventEmitter();

  filteredCollectibles: Collectible[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredCollectibles = this._collectibles
      .filter(
        this.filterByCollectionSubset(
          this.collectibleCollectionSubset,
          COLLECTIBLE_KEY_COLLECTED
        )
      )
      .filter(
        this.filterByCollectionSubset(
          this.modelCollectionSubset,
          COLLECTIBLE_KEY_HAVE_MODEL
        )
      )
      .filter(
        this.filterByCollectionSubset(
          this.modelSuppliesCollectionSubset,
          COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES
        )
      )
      .filter(this.filterByName());
  }

  getCardStyleClasses() {
    return {
      'card-style-small': this.cardStyle === CardStyle.SMALL,
      'card-style-details': this.cardStyle === CardStyle.DETAILS,
    };
  }

  filterByCollectionSubset(
    collectionSubset: CollectionSubset,
    property: string
  ) {
    return (collectible: Collectible) => {
      return (
        collectionSubset === CollectionSubset.ALL ||
        collectible[property] === undefined ||
        (collectionSubset === CollectionSubset.COLLECTED &&
          collectible[property]) ||
        (collectionSubset === CollectionSubset.UNCOLLECTED &&
          !collectible[property])
      );
    };
  }

  filterByName() {
    return (collectible: Collectible) => {
      return (
        !this.partialName ||
        collectible.name
          .toLowerCase()
          .replace(/(\s|')/g, '')
          .includes(this.partialName.toLowerCase().replace(/(\s|')/g, ''))
      );
    };
  }

  toggleCardStyle() {
    this.selectedCardStyle.emit(
      this.cardStyle === CardStyle.DETAILS ? CardStyle.SMALL : CardStyle.DETAILS
    );
  }

  markCollectibleCollected(collectible) {
    this.collectibleCollected.emit(collectible);
  }

  markCollectibleModelCollected(collectible) {
    this.collectibleModelCollected.emit(collectible);
  }

  markHaveCollectibleModelSupplies(collectible) {
    this.haveCollectibleModelSupplies.emit(collectible);
  }
}
