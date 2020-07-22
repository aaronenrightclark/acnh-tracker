import { NgModule } from '@angular/core';
import { BugTrackerViewComponent } from '../bug-tracker-view/bug-tracker-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BugTrackerViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BugTrackerRoutingModule {}
