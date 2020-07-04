import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    CritterTrackerComponent,
    BugTrackerViewComponent,
    FishTrackerViewComponent,
    LandingViewComponent,
    CritterCardComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, ReactiveFormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
