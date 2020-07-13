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
  Creature,
  BugLocation,
  FishLocation,
} from '../shared/models/collectible.model';
import { DatePipe, APP_BASE_HREF } from '@angular/common';
import { SwimStyle } from '../shared/models/collectible.model';
import { Hemisphere } from '../shared/models/app-state.model';
import {
  CollectibleType,
  SilhouetteSize,
} from '../shared/models/collectible.model';

@Component({
  selector: 'app-creature-card',
  templateUrl: './creature-card.component.html',
  styleUrls: ['./creature-card.component.css'],
})
export class CreatureCardComponent implements OnInit {
  @Input() creature: Creature;
  @Input() hemisphere: Hemisphere;

  @Output() creatureCollected: EventEmitter<Creature> = new EventEmitter();
  @Output() creatureModelCollected: EventEmitter<Creature> = new EventEmitter();
  @Output() haveCreatureModelSupplies: EventEmitter<
    Creature
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
      collected: [this.creature.collected],
      haveModel: [this.creature.haveModel],
      haveModelSupplies: [this.creature.haveModelSupplies],
    });

    this.imageSrc = this.getImageSrc();
  }

  markCreatureCollected() {
    this.creatureCollected.emit(this.creature);
  }

  markCreatureModelCollected() {
    this.creatureModelCollected.emit(this.creature);
  }

  markHaveCreatureModelSupplies() {
    this.haveCreatureModelSupplies.emit(this.creature);
  }

  getLocation(): string {
    return (this.creature.location as any[])
      .map((loc) => {
        return this.creature.type === CollectibleType.BUG
          ? BugLocation[+loc]
          : FishLocation[+loc];
      })
      .join(', ');
  }

  getMonths(): string {
    return this.creature.monthsActive.length
      ? this.creature.monthsActive
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
    return this.creature.timesActive.length
      ? this.creature.timesActive
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

  getSize(): string {
    return SilhouetteSize[this.creature.size];
  }

  getSwimStyle(): string {
    return SwimStyle[this.creature.swimStyle];
  }

  getImageSrc(): string {
    if (
      !!this.creature &&
      this.creature.index !== undefined &&
      !!this.creature.name &&
      this.creature.type !== undefined &&
      this.creature.type === CollectibleType.BUG
    ) {
      let creatureType: string;
      switch (+this.creature.type) {
        case CollectibleType.BUG: {
          creatureType = 'bugs';
          break;
        }
        // TODO: enable after renaming fish assets
        // case CreatureType.FISH: {
        //   creatureType = 'fish';
        //   break;
        // }
      }
      const fileName = `${this.creature.index}-${this.creature.name.replace(
        /\W/g,
        ''
      )}.png`;
      return this.baseHref + `assets/creatures/${creatureType}/${fileName}`;
    }
    return this.baseHref + 'assets/default.png';
  }
}