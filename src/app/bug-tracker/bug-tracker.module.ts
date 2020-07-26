import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugTrackerViewComponent } from '../bug-tracker-view/bug-tracker-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { BugTrackerRoutingModule } from './bug-tracker-routing.module';
import { StoreModule } from '@ngrx/store';
import * as bugTrackerReducer from '../bug-tracker-view/reducers/bug-tracker.reducer';
import * as bugTrackerFilterReducer from '../bug-tracker-view/reducers/bug-tracker-filter.reducer';
import {
  CollectibleTrackerKey,
  TRACKER_KEY,
} from '../shared/models/app-state.model';

@NgModule({
  declarations: [BugTrackerViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CollectibleTrackerKey.BUGS, {
      trackerState: bugTrackerReducer.reducer,
      trackerFilterState: bugTrackerFilterReducer.reducer,
    }),
    SharedModule.forChild({
      trackerKey: CollectibleTrackerKey.BUGS,
    }),
    MatButtonModule,
    BugTrackerRoutingModule,
  ],
  providers: [{ provide: TRACKER_KEY, useValue: CollectibleTrackerKey.BUGS }],
  exports: [BugTrackerViewComponent],
})
export class BugTrackerModule {}
