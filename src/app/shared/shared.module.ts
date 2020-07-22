import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionFiltersComponent } from '../collection-filters/collection-filters.component';
import { CreatureCardComponent } from '../creature-card/creature-card.component';
import { HemisphereToggleComponent } from '../hemisphere-toggle/hemisphere-toggle.component';
import { CollectedFilterToggleComponent } from '../collected-filter-toggle/collected-filter-toggle.component';
import { CollectibleTrackerViewComponent } from '../collectible-tracker-view/collectible-tracker-view.component';
import { CreatureTrackerComponent } from '../creature-tracker/creature-tracker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CollectibleTrackerKey, TRACKER_KEY } from './models/app-state.model';

export interface SharedModuleConfig {
  trackerKey: CollectibleTrackerKey;
}

@NgModule({
  declarations: [
    CreatureCardComponent,
    HemisphereToggleComponent,
    CollectedFilterToggleComponent,
    CollectionFiltersComponent,
    CollectibleTrackerViewComponent,
    CreatureTrackerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
  ],
  exports: [
    CreatureCardComponent,
    HemisphereToggleComponent,
    CollectedFilterToggleComponent,
    CollectionFiltersComponent,
    CollectibleTrackerViewComponent,
    CreatureTrackerComponent,
  ],
})
export class SharedModule {
  static forChild(
    config: SharedModuleConfig
  ): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [{ provide: TRACKER_KEY, useValue: config.trackerKey }],
    };
  }
}
