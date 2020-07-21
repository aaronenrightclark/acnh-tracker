import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeaCreatureTrackerViewComponent } from '../sea-creature-tracker-view/sea-creature-tracker-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SeaCreatureTrackerViewComponent],
  imports: [CommonModule, SharedModule, MatButtonModule],
  exports: [SeaCreatureTrackerViewComponent],
})
export class SeaCreatureTrackerModule {}
