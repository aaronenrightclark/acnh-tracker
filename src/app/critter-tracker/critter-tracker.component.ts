import { Component, OnInit, Input } from '@angular/core';
import { Critter } from '../shared/models/critter.model';

@Component({
  selector: 'app-critter-tracker',
  templateUrl: './critter-tracker.component.html',
  styleUrls: ['./critter-tracker.component.css'],
})
export class CritterTrackerComponent implements OnInit {
  @Input() critters: Critter[];

  constructor() {}

  ngOnInit(): void {}
}
