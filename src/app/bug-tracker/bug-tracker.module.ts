import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugTrackerViewComponent } from '../bug-tracker-view/bug-tracker-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import {
  TRACKER_STATE_KEY,
  CollectibleTrackerStateKey,
  CollectibleTrackerFilterStateKey,
  TRACKER_FILTER_STATE_KEY,
} from '../shared/models/app-state.model';

@NgModule({
  declarations: [BugTrackerViewComponent],
  imports: [CommonModule, SharedModule, MatButtonModule],
  providers: [
    { provide: TRACKER_STATE_KEY, useValue: CollectibleTrackerStateKey.BUGS },
    {
      provide: TRACKER_FILTER_STATE_KEY,
      useValue: CollectibleTrackerFilterStateKey.BUGS,
    },
  ],
  exports: [BugTrackerViewComponent],
})
export class BugTrackerModule {}
