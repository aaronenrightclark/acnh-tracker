import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BugTrackerViewComponent } from './bug-tracker-view/bug-tracker-view.component';
import { FishTrackerViewComponent } from './fish-tracker-view/fish-tracker-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { SongTrackerViewComponent } from './song-tracker-view/song-tracker-view.component';
import { SeaCreatureTrackerViewComponent } from './sea-creature-tracker-view/sea-creature-tracker-view.component';

export const routes: Routes = [
  {
    path: 'bugs',
    loadChildren: () =>
      import('./bug-tracker/bug-tracker.module').then(
        (m) => m.BugTrackerModule
      ),
  },
  {
    path: 'fish',
    loadChildren: () =>
      import('./fish-tracker/fish-tracker.module').then(
        (m) => m.FishTrackerModule
      ),
  },
  {
    path: 'sea-creatures',
    loadChildren: () =>
      import('./sea-creature-tracker/sea-creature-tracker.module').then(
        (m) => m.SeaCreatureTrackerModule
      ),
  },
  {
    path: 'songs',
    loadChildren: () =>
      import('./song-tracker/song-tracker.module').then(
        (m) => m.SongTrackerModule
      ),
  },
  { path: '**', component: LandingViewComponent },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
