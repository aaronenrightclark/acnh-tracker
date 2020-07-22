import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeaCreatureTrackerViewComponent } from '../sea-creature-tracker-view/sea-creature-tracker-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { SeaCreatureTrackerRoutingModule } from './sea-creature-tracker-routing.module';
import {
  CollectibleTrackerKey,
  TRACKER_KEY,
} from '../shared/models/app-state.model';
import { StoreModule } from '@ngrx/store';
import { seaCreatureTrackerReducer } from '../sea-creature-tracker-view/reducers/sea-creature-tracker.reducer';
import { seaCreatureTrackerFilterReducer } from '../sea-creature-tracker-view/reducers/sea-creature-tracker-filter.reducer';

@NgModule({
  declarations: [SeaCreatureTrackerViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CollectibleTrackerKey.SEA_CREATURES, {
      trackerState: seaCreatureTrackerReducer,
      trackerFilterState: seaCreatureTrackerFilterReducer,
    }),
    SharedModule.forChild({
      trackerKey: CollectibleTrackerKey.SEA_CREATURES,
    }),
    MatButtonModule,
    SeaCreatureTrackerRoutingModule,
  ],
  providers: [
    { provide: TRACKER_KEY, useValue: CollectibleTrackerKey.SEA_CREATURES },
  ],
  exports: [SeaCreatureTrackerViewComponent],
})
export class SeaCreatureTrackerModule {}
