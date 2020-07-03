import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BugTrackerViewComponent } from './bug-tracker-view/bug-tracker-view.component';
import { FishTrackerViewComponent } from './fish-tracker-view/fish-tracker-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';

export const routes: Routes = [
  { path: 'bugs', component: BugTrackerViewComponent },
  { path: 'fish', component: FishTrackerViewComponent },
  { path: '**', component: LandingViewComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
