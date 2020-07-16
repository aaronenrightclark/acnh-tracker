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
  BugLocation,
  FishLocation,
  SongMood,
  SilhouetteSize,
  CollectibleType,
} from '../shared/models/collectible.model';
import { DatePipe, APP_BASE_HREF } from '@angular/common';
import {
  SwimStyle,
  Collectible,
  CardStyle,
} from '../shared/models/collectible.model';
import { Hemisphere } from '../shared/models/app-state.model';

@Component({
  selector: 'app-collectible-card',
  templateUrl: './creature-card.component.html',
  styleUrls: ['./creature-card.component.scss'],
})
export class CreatureCardComponent implements OnInit {
  CardStyle = CardStyle;
  SwimStyle = SwimStyle;
  SongMood = SongMood;
  SilhouetteSize = SilhouetteSize;

  @Input() collectible: Collectible;
  @Input() hemisphere: Hemisphere;
  @Input() cardStyle: CardStyle;

  @Output() collectibleCollected: EventEmitter<
    Collectible
  > = new EventEmitter();
  @Output() collectibleModelCollected: EventEmitter<
    Collectible
  > = new EventEmitter();
  @Output() haveCollectibleModelSupplies: EventEmitter<
    Collectible
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
      collected: [this.collectible.collected],
      haveModel: [this.collectible.haveModel],
      haveModelSupplies: [this.collectible.haveModelSupplies],
    });

    this.imageSrc = this.getImageSrc();
  }

  markCollectibleCollected() {
    this.collectibleCollected.emit(this.collectible);
  }

  markCollectibleModelCollected() {
    this.collectibleModelCollected.emit(this.collectible);
  }

  markHaveCollectibleModelSupplies() {
    this.haveCollectibleModelSupplies.emit(this.collectible);
  }

  getLocation(): string {
    return (this.collectible.location as any[])
      .map((loc) => {
        return this.collectible.type === CollectibleType.BUG
          ? BugLocation[+loc]
          : FishLocation[+loc];
      })
      .join(', ');
  }

  getMonths(): string {
    return this.collectible.monthsActive.length
      ? this.collectible.monthsActive
          .map((activityWindow) => {
            const start = new Date();
            const end = new Date();
            const offset = this.hemisphere === Hemisphere.NORTH ? 0 : 6;
            start.setMonth(activityWindow.start + offset);
            end.setMonth(activityWindow.end + offset);
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
    return this.collectible.timesActive.length
      ? this.collectible.timesActive
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
      !!this.collectible &&
      this.collectible.index !== undefined &&
      !!this.collectible.name &&
      this.collectible.type !== undefined &&
      this.collectible.type === CollectibleType.BUG
    ) {
      let collectibleType: string;
      switch (+this.collectible.type) {
        case CollectibleType.BUG: {
          collectibleType = 'bugs';
          break;
        }
        // TODO: enable after renaming fish assets
        // case CollectibleType.FISH: {
        //   collectibleType = 'fish';
        //   break;
        // }
      }
      const fileName = `${
        this.collectible.index
      }-${this.collectible.name.replace(/\W/g, '')}.png`;
      return (
        this.baseHref + `assets/collectibles/${collectibleType}/${fileName}`
      );
    }
    return this.baseHref + 'assets/default.png';
  }
}
