import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  CommonModule,
  DatePipe,
  APP_BASE_HREF,
  PlatformLocation,
} from '@angular/common';
import { bugTrackerReducer } from './bug-tracker-view/reducers/bug-tracker.reducer';
import { fishTrackerReducer } from './fish-tracker-view/reducers/fish-tracker.reducer';
import { songTrackerReducer } from './song-tracker-view/reducers/song-tracker.reducer';
import { seaCreatureTrackerReducer } from './sea-creature-tracker-view/reducers/sea-creature-tracker.reducer';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { bugTrackerFilterReducer } from './bug-tracker-view/reducers/bug-tracker-filter.reducer';
import { MatButtonModule } from '@angular/material/button';
import { sharedTrackerReducer } from './shared/reducers/shared.reducer';
import { fishTrackerFilterReducer } from './fish-tracker-view/reducers/fish-tracker-filter.reducer';
import { seaCreatureTrackerFilterReducer } from './sea-creature-tracker-view/reducers/sea-creature-tracker-filter.reducer';
import { songTrackerFilterReducer } from './song-tracker-view/reducers/song-tracker-filter.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BugTrackerModule } from './bug-tracker/bug-tracker.module';
import { SeaCreatureTrackerModule } from './sea-creature-tracker/sea-creature-tracker.module';
import { SongTrackerModule } from './song-tracker/song-tracker.module';
import { FishTrackerModule } from './fish-tracker/fish-tracker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [AppComponent, HeaderNavComponent, LandingViewComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
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
    MatListModule,
    MatSidenavModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    MatButtonModule,
    BugTrackerModule,
    FishTrackerModule,
    SeaCreatureTrackerModule,
    SongTrackerModule,
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
