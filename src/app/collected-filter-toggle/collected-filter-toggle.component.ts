import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CollectionSubset } from '../shared/models/collectible.model';
import { CollectionStatusFilterType } from '../shared/models/filter.model';

@Component({
  selector: 'app-collected-filter-toggle',
  templateUrl: './collected-filter-toggle.component.html',
  styleUrls: ['./collected-filter-toggle.component.css'],
})
export class CollectedFilterToggleComponent implements OnInit {
  CollectionSubset = CollectionSubset;
  CollectionStatusFilterType = CollectionStatusFilterType;

  @Input() filterType: CollectionStatusFilterType;
  @Input() set resetCollectionStatusFilterType(reset: boolean) {
    this.selected = CollectionSubset.ALL;
  }
  @Output() collectionStatus = new EventEmitter<CollectionSubset>();

  selected: CollectionSubset;

  constructor() {}

  ngOnInit(): void {
    this.selected = CollectionSubset.ALL;
  }

  setCollectionStatusFilter(collectionSubset: CollectionSubset) {
    this.selected = collectionSubset;
    this.collectionStatus.emit(collectionSubset);
  }

  resetSelectedOption() {
    this.selected = CollectionSubset.ALL;
  }
}
