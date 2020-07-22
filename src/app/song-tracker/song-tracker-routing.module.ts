import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongTrackerViewComponent } from '../song-tracker-view/song-tracker-view.component';

const routes: Routes = [
  {
    path: '',
    component: SongTrackerViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongTrackerRoutingModule {}
