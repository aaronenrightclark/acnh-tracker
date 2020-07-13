import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collectible, Song } from '../shared/models/collectible.model';

@Component({
  selector: 'app-collectible-tracker',
  templateUrl: './collectible-tracker.component.html',
  styleUrls: ['./collectible-tracker.component.css'],
})
export class CollectibleTrackerComponent implements OnInit {
  _collectibles: Collectible[] | Song[] = [];
  @Input() set collectibles(collectibles: {
    [key: string]: Collectible | Song;
  }) {
    this._collectibles = Object.keys(collectibles).map(
      (key) => collectibles[key]
    );
  }

  @Output() collectibleCollected: EventEmitter<
    Collectible | Song
  > = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleCollectibleCollected(collectible): void {
    this.collectibleCollected.emit(collectible);
  }
}
