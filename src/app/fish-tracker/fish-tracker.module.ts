import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishTrackerViewComponent } from '../fish-tracker-view/fish-tracker-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FishTrackerViewComponent],
  imports: [CommonModule, SharedModule, MatButtonModule],
  exports: [FishTrackerViewComponent],
})
export class FishTrackerModule {}
