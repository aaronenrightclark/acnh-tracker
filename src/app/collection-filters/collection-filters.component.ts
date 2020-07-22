import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {
  startWith,
  map,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Collectible } from '../shared/models/collectible.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-collection-filters',
  templateUrl: './collection-filters.component.html',
  styleUrls: ['./collection-filters.component.css'],
})
export class CollectionFiltersComponent implements OnInit, OnDestroy {
  @Input() collectibles: { [key: number]: Collectible };
  @Input() set resetNameFilterInput(resetInput: boolean) {
    this.control.setValue('');
  }
  @Input() set nameFilter(name: string) {
    // TODO: fix
    this.control.setValue(name);
  }
  @Output() partialName = new EventEmitter<string>();

  filteredCollectibleNames: Observable<string[]>;
  control = new FormControl();

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
}
