import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Critter } from '../shared/models/critter.model';

@Component({
  selector: 'app-critter-tracker',
  templateUrl: './critter-tracker.component.html',
  styleUrls: ['./critter-tracker.component.css'],
})
export class CritterTrackerComponent implements OnInit {
  _critters: Critter[] = [];
  @Input() set critters(critters: { [key: string]: Critter }) {
    console.log(
      'critter-tracker-component: critters: ' + JSON.stringify(critters)
    );
    this._critters = Object.keys(critters).map((key) => critters[key]);
  }

  @Output() critterCollected: EventEmitter<Critter> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  markCritterCollected(critter) {
    this.critterCollected.emit(critter);
  }
}
