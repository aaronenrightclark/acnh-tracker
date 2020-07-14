import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { CreatureTrackerComponent } from './creature-tracker/creature-tracker.component';
import { BugTrackerViewComponent } from './bug-tracker-view/bug-tracker-view.component';
import { FishTrackerViewComponent } from './fish-tracker-view/fish-tracker-view.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { CreatureCardComponent } from './creature-card/creature-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  CommonModule,
  DatePipe,
  APP_BASE_HREF,
  PlatformLocation,
} from '@angular/common';
import { bugTrackerReducer } from './bug-tracker-view/reducers/bug-tracker.reducer';
import { SongTrackerViewComponent } from './song-tracker-view/song-tracker-view.component';
import { SeaCreatureTrackerViewComponent } from './sea-creature-tracker-view/sea-creature-tracker-view.component';
import { fishTrackerReducer } from './fish-tracker-view/reducers/fish-tracker.reducer';
import { songTrackerReducer } from './song-tracker-view/reducers/song-tracker.reducer';
import { seaCreatureTrackerReducer } from './sea-creature-tracker-view/reducers/sea-creature-tracker.reducer';
import { HemisphereToggleComponent } from './hemisphere-toggle/hemisphere-toggle.component';
import { CollectedFilterToggleComponent } from './collected-filter-toggle/collected-filter-toggle.component';
import { CollectionFiltersComponent } from './collection-filters/collection-filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { bugTrackerFilterReducer } from './bug-tracker-view/reducers/bug-tracker-filter.reducer';
import { BugTrackerEffects } from './bug-tracker-view/effects/bug-tracker.effects';
import { MatButtonModule } from '@angular/material/button';
import { sharedTrackerReducer } from './shared/reducers/shared.reducer';
import { fishTrackerFilterReducer } from './fish-tracker-view/reducers/fish-tracker-filter.reducer';
import { seaCreatureTrackerFilterReducer } from './sea-creature-tracker-view/reducers/sea-creature-tracker-filter.reducer';
import { songTrackerFilterReducer } from './song-tracker-view/reducers/song-tracker-filter.reducer';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    CreatureTrackerComponent,
    BugTrackerViewComponent,
    FishTrackerViewComponent,
    LandingViewComponent,
    CreatureCardComponent,
    SongTrackerViewComponent,
    SeaCreatureTrackerViewComponent,
    HemisphereToggleComponent,
    CollectedFilterToggleComponent,
    CollectionFiltersComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      bugTrackerState: bugTrackerReducer,
      bugTrackerFilterState: bugTrackerFilterReducer,
      fishTrackerState: fishTrackerReducer,
      fishTrackerFilterState: fishTrackerFilterReducer,
      seaCreatureTrackerState: seaCreatureTrackerReducer,
      seaCreatureTrackerFilterState: seaCreatureTrackerFilterReducer,
      songTrackerState: songTrackerReducer,
      songTrackerFilterState: songTrackerFilterReducer,
      sharedTrackerState: sharedTrackerReducer,
    }),
    // EffectsModule.forRoot([BugTrackerEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatButtonModule,
  ],
  providers: [
    DatePipe,
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
