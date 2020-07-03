import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Critter } from '../shared/models/critter.model';
import { CritterType } from '../critter-tracker/models/critter-tracker.model';

@Component({
  selector: 'app-critter-card',
  templateUrl: './critter-card.component.html',
  styleUrls: ['./critter-card.component.css'],
})
export class CritterCardComponent implements OnInit {
  @Input() critter: Critter;

  collectionForm: FormGroup;
  imageSrc: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.collectionForm = this.formBuilder.group({
      collected: [this.critter.caught],
      haveModel: [this.critter.haveModel],
    });

    this.imageSrc = this.getImageSrc();

    // this.collectionForm = this.formBuilder.group({
    //   collected: [false],
    //   haveModel: [false],
    // });
    // this.collectionForm = new FormGroup({
    //   collected: new FormControl(),
    //   haveModel: new FormControl(),
    // });
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
      return `/assets/critters/${critterType}/${fileName}`;
    }
    return '/assets/default.png';
  }
}
