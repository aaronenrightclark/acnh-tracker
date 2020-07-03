import { Component, OnInit } from '@angular/core';
import { BUG_DATA } from '../shared/models/constants';
import { Critter } from '../shared/models/critter.model';

@Component({
  selector: 'app-bug-tracker-view',
  templateUrl: './bug-tracker-view.component.html',
  styleUrls: ['./bug-tracker-view.component.css'],
})
export class BugTrackerViewComponent implements OnInit {
  critters: Critter[];

  constructor() {}

  ngOnInit(): void {
    this.critters = Object.keys(BUG_DATA).map((key) => BUG_DATA[key]);
  }
}
