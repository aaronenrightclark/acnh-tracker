import { NgModule } from '@angular/core';
import { FishTrackerViewComponent } from '../fish-tracker-view/fish-tracker-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FishTrackerViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FishTrackerRoutingModule {}
