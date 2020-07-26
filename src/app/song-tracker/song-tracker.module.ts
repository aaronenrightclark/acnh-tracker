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
import * as songTrackerReducer from '../song-tracker-view/reducers/song-tracker.reducer';
import * as songTrackerFilterReducer from '../song-tracker-view/reducers/song-tracker-filter.reducer';

@NgModule({
  declarations: [SongTrackerViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CollectibleTrackerKey.SONGS, {
      trackerState: songTrackerReducer.reducer,
      trackerFilterState: songTrackerFilterReducer.reducer,
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
