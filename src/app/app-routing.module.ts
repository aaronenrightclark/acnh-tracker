import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BugTrackerViewComponent } from './bug-tracker-view/bug-tracker-view.component';
import { FishTrackerViewComponent } from './fish-tracker-view/fish-tracker-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { SongTrackerViewComponent } from './song-tracker-view/song-tracker-view.component';
import { SeaCreatureTrackerViewComponent } from './sea-creature-tracker-view/sea-creature-tracker-view.component';

export const routes: Routes = [
  { path: 'bugs', component: BugTrackerViewComponent },
  { path: 'fish', component: FishTrackerViewComponent },
  { path: 'sea-creatures', component: SeaCreatureTrackerViewComponent },
  { path: 'songs', component: SongTrackerViewComponent },
  { path: '**', component: LandingViewComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
