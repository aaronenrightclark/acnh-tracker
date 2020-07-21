import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongTrackerViewComponent } from '../song-tracker-view/song-tracker-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SongTrackerViewComponent],
  imports: [CommonModule, SharedModule, MatButtonModule],
  exports: [SongTrackerViewComponent],
})
export class SongTrackerModule {}
