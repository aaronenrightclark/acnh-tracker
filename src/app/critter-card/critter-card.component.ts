import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  Critter,
  BugLocation,
  FishLocation,
} from '../shared/models/critter.model';
import { DatePipe, APP_BASE_HREF } from '@angular/common';
import { CritterType } from '../shared/models/critter.model';

@Component({
  selector: 'app-critter-card',
  templateUrl: './critter-card.component.html',
  styleUrls: ['./critter-card.component.css'],
})
export class CritterCardComponent implements OnInit {
  @Input() critter: Critter;

  @Output() critterCollected: EventEmitter<Critter> = new EventEmitter();
  @Output() critterModelCollected: EventEmitter<Critter> = new EventEmitter();
  @Output() haveCritterModelSupplies: EventEmitter<
    Critter
  > = new EventEmitter();

  collectionForm: FormGroup;
  imageSrc: string;

  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.collectionForm = this.formBuilder.group({
      collected: [this.critter.collected],
      haveModel: [this.critter.haveModel],
      haveModelSupplies: [this.critter.haveModelSupplies],
    });

    this.imageSrc = this.getImageSrc();
  }

  markCritterCollected() {
    this.critterCollected.emit(this.critter);
  }

  markCritterModelCollected() {
    this.critterModelCollected.emit(this.critter);
  }

  markHaveCritterModelSupplies() {
    this.haveCritterModelSupplies.emit(this.critter);
  }

  getLocation(): string {
    return (this.critter.location as any[])
      .map((loc) => {
        return this.critter.type === CritterType.BUG
          ? BugLocation[+loc]
          : FishLocation[+loc];
      })
      .join(', ');
  }

  getMonths(): string {
    return this.critter.monthsActive.length
      ? this.critter.monthsActive
          .map((activityWindow) => {
            const start = new Date();
            const end = new Date();
            start.setMonth(activityWindow.start);
            end.setMonth(activityWindow.end);
            return activityWindow.start === activityWindow.end
              ? this.datePipe.transform(start, 'MMM')
              : `${this.datePipe.transform(
                  start,
                  'MMM'
                )}-${this.datePipe.transform(end, 'MMM')}`;
          })
          .join(', ')
      : 'ALL YEAR';
  }

  getTimes(): string {
    return this.critter.timesActive.length
      ? this.critter.timesActive
          .map((activityWindow) => {
            const start = new Date();
            const end = new Date();
            start.setHours(activityWindow.start);
            end.setHours(activityWindow.end);
            return activityWindow.start === activityWindow.end
              ? this.datePipe.transform(start, 'h a')
              : `${this.datePipe.transform(
                  start,
                  'h a'
                )}-${this.datePipe.transform(end, 'h a')}`;
          })
          .join(', ')
      : 'ALL DAY';
  }

  getImageSrc(): string {
    if (
      !!this.critter &&
      this.critter.index !== undefined &&
      !!this.critter.name &&
      this.critter.type !== undefined
    ) {
      let critterType: string;
      switch (+this.critter.type) {
        case CritterType.BUG: {
          critterType = 'bugs';
          break;
        }
        case CritterType.FISH: {
          critterType = 'fish';
          break;
        }
      }
      const fileName = `${this.critter.index}-${this.critter.name.replace(
        /\W/g,
        ''
      )}.png`;
      return this.baseHref + `assets/critters/${critterType}/${fileName}`;
    }
    return this.baseHref + 'assets/default.png';
  }
}
