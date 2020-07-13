import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hemisphere } from '../shared/models/app-state.model';

@Component({
  selector: 'app-hemisphere-toggle',
  templateUrl: './hemisphere-toggle.component.html',
  styleUrls: ['./hemisphere-toggle.component.css'],
})
export class HemisphereToggleComponent implements OnInit {
  Hemisphere = Hemisphere; // expose enum value to template

  @Output() hemisphereToggleValue = new EventEmitter<Hemisphere>();

  constructor() {}

  ngOnInit(): void {}

  setHemisphereToggleValue(hemisphere: Hemisphere) {
    console.log('emitting hemisphere toggle: ' + hemisphere);
    this.hemisphereToggleValue.emit(hemisphere);
  }
}
