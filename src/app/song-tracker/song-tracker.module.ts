import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongTrackerViewComponent } from '../song-tracker-view/song-tracker-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { SongTrackerRoutingModule } from './song-tracker-routing.module';
import { StoreModule } from '@ngrx/store';
import {
  CollectibleTrackerKey,
  TRACKER_KEY,
} from '../shared/models/app-state.model';
import { songTrackerReducer } from '../song-tracker-view/reducers/song-tracker.reducer';
import { songTrackerFilterReducer } from '../song-tracker-view/reducers/song-tracker-filter.reducer';

@NgModule({
  declarations: [SongTrackerViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CollectibleTrackerKey.SONGS, {
      trackerState: songTrackerReducer,
      trackerFilterState: songTrackerFilterReducer,
    }),
    SharedModule.forChild({
      trackerKey: CollectibleTrackerKey.SONGS,
    }),
    MatButtonModule,
    SongTrackerRoutingModule,
  ],
  providers: [{ provide: TRACKER_KEY, useValue: CollectibleTrackerKey.SONGS }],
  exports: [SongTrackerViewComponent],
})
export class SongTrackerModule {}
