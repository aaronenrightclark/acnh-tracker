import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Creature } from '../shared/models/collectible.model';
import { Hemisphere } from '../shared/models/app-state.model';

@Component({
  selector: 'app-creature-tracker',
  templateUrl: './creature-tracker.component.html',
  styleUrls: ['./creature-tracker.component.css'],
})
export class CreatureTrackerComponent implements OnInit {
  _creatures: Creature[] = [];
  @Input() set creatures(creatures: { [key: string]: Creature }) {
    console.log(
      'creature-tracker-component: creatures input: ' +
        JSON.stringify(creatures)
    );
    this._creatures = Object.keys(creatures).map((key) => creatures[key]);
  }
  @Input() hemisphere: Hemisphere;

  @Output() creatureCollected: EventEmitter<Creature> = new EventEmitter();
  @Output() creatureModelCollected: EventEmitter<Creature> = new EventEmitter();
  @Output() haveCreatureModelSupplies: EventEmitter<
    Creature
  > = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

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
