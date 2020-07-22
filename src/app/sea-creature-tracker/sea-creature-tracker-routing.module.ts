import { NgModule } from '@angular/core';
import { SeaCreatureTrackerViewComponent } from '../sea-creature-tracker-view/sea-creature-tracker-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SeaCreatureTrackerViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeaCreatureTrackerRoutingModule {}
