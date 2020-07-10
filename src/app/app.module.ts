import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
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
import { bugTrackerReducer } from './bug-tracker-view/reducer/bug-tracker.reducer';
import { SongTrackerViewComponent } from './song-tracker-view/song-tracker-view.component';
import { SeaCreatureTrackerViewComponent } from './sea-creature-tracker-view/sea-creature-tracker-view.component';
import { CollectibleCardComponent } from './collectible-card/collectible-card.component';
import { CollectibleTrackerComponent } from './collectible-tracker/collectible-tracker.component';
import { fishTrackerReducer } from './fish-tracker-view/reducer/fish-tracker.reducer';
import { songTrackerReducer } from './song-tracker-view/reducers/song-tracker.reducer';

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
    CollectibleCardComponent,
    CollectibleTrackerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      bugTrackerState: bugTrackerReducer,
      fishTrackerState: fishTrackerReducer,
      songTrackerState: songTrackerReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
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
