import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishTrackerViewComponent } from '../fish-tracker-view/fish-tracker-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { FishTrackerRoutingModule } from './fish-tracker-routing.module';
import { StoreModule } from '@ngrx/store';
import {
  CollectibleTrackerKey,
  TRACKER_KEY,
} from '../shared/models/app-state.model';
import { fishTrackerReducer } from '../fish-tracker-view/reducers/fish-tracker.reducer';
import { fishTrackerFilterReducer } from '../fish-tracker-view/reducers/fish-tracker-filter.reducer';

@NgModule({
  declarations: [FishTrackerViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CollectibleTrackerKey.FISH, {
      trackerState: fishTrackerReducer,
      trackerFilterState: fishTrackerFilterReducer,
    }),
    SharedModule.forChild({
      trackerKey: CollectibleTrackerKey.FISH,
    }),
    MatButtonModule,
    FishTrackerRoutingModule,
  ],
  providers: [{ provide: TRACKER_KEY, useValue: CollectibleTrackerKey.FISH }],
  exports: [FishTrackerViewComponent],
})
export class FishTrackerModule {}
