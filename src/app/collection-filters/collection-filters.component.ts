import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import {
  startWith,
  map,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Collectible } from '../shared/models/collectible.model';
import { FormControl } from '@angular/forms';
import { Hemisphere } from '../shared/models/app-state.model';

@Component({
  selector: 'app-collection-filters',
  templateUrl: './collection-filters.component.html',
  styleUrls: ['./collection-filters.component.css'],
})
export class CollectionFiltersComponent implements OnInit, OnDestroy {
  @Input() collectibles: { [key: number]: Collectible };
  @Output() partialName = new EventEmitter<string>();
  @Output() hemisphereToggleValue = new EventEmitter<Hemisphere>();

  filteredCollectibleNames: Observable<string[]>;
  control = new FormControl();

  nameFilterInput: Subject<string> = new Subject<string>();

  subscriptions = new Array<Subscription>();

  constructor() {}

  ngOnInit(): void {
    this.filteredCollectibleNames = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    this.subscriptions.push(
      this.control.valueChanges
        .pipe(debounceTime(200), distinctUntilChanged())
        .subscribe((name) => {
          console.log('control value change: ' + name);
          this.partialName.emit(name);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return Object.keys(this.collectibles)
      .map((key) => this.collectibles[key].name)
      .filter((name) => this._normalizeValue(name).includes(filterValue));
  }

  _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  updateNameFilterInput(entry: string): void {
    console.log('updating name filter input: ' + entry);
    this.nameFilterInput.next(entry);
  }

  setHemisphereToggleValue(hemisphere: Hemisphere) {
    this.hemisphereToggleValue.emit(hemisphere);
  }
}
