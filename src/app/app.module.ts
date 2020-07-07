import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { CritterTrackerComponent } from './critter-tracker/critter-tracker.component';
import { BugTrackerViewComponent } from './bug-tracker-view/bug-tracker-view.component';
import { FishTrackerViewComponent } from './fish-tracker-view/fish-tracker-view.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { CritterCardComponent } from './critter-card/critter-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { bugTrackerReducer } from './bug-tracker-view/reducer/bug-tracker.reducer';
import { SongTrackerViewComponent } from './song-tracker-view/song-tracker-view.component';
import { SeaCreatureTrackerViewComponent } from './sea-creature-tracker-view/sea-creature-tracker-view.component';
import { CollectibleCardComponent } from './collectible-card/collectible-card.component';
import { CollectibleTrackerComponent } from './collectible-tracker/collectible-tracker.component';
import { fishTrackerReducer } from './fish-tracker-view/reducer/fish-tracker.reducer';
import { songTrackerReducer } from './song-tracker-view/reducers/song-tracker.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    CritterTrackerComponent,
    BugTrackerViewComponent,
    FishTrackerViewComponent,
    LandingViewComponent,
    CritterCardComponent,
    SongTrackerViewComponent,
    SeaCreatureTrackerViewComponent,
    CollectibleCardComponent,
    CollectibleTrackerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      bugTrackerState: bugTrackerReducer,
      fishTrackerState: fishTrackerReducer,
      songTrackerState: songTrackerReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
