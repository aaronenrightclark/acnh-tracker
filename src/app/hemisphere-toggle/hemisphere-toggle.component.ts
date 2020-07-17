import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hemisphere } from '../shared/models/app-state.model';

@Component({
  selector: 'app-hemisphere-toggle',
  templateUrl: './hemisphere-toggle.component.html',
  styleUrls: ['./hemisphere-toggle.component.css'],
})
export class HemisphereToggleComponent implements OnInit {
  Hemisphere = Hemisphere; // expose enum value to template

  @Input() currentHemisphere: Hemisphere;
  @Output() hemisphereToggleValue = new EventEmitter<Hemisphere>();

  constructor() {}

  ngOnInit(): void {}

  setHemisphereToggleValue(hemisphere: Hemisphere) {
    this.hemisphereToggleValue.emit(hemisphere);
  }
}
