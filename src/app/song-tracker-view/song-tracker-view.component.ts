import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../shared/models/app-state.model';
import { selectSongs } from './reducers/song-tracker.reducer';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Song } from '../shared/models/collectible.model';
import { toggleSongCollectedAction } from './actions/song-tracker.actions';

@Component({
  selector: 'app-song-tracker-view',
  templateUrl: './song-tracker-view.component.html',
  styleUrls: ['./song-tracker-view.component.css'],
})
export class SongTrackerViewComponent implements OnInit {
  songs$: Observable<{ [key: number]: Song }>;

  constructor(private store: Store<AppState>) {
    this.songs$ = this.store.pipe(
      map((state) => selectSongs(state)),
      filter((value) => !!value)
    );
  }

  ngOnInit(): void {}

  toggleSongCollected(song: Song) {
    this.store.dispatch(toggleSongCollectedAction({ song }));
  }
}
