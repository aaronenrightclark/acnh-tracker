import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Collectible, Song } from '../shared/models/collectible.model';

@Component({
  selector: 'app-collectible-card',
  templateUrl: './collectible-card.component.html',
  styleUrls: ['./collectible-card.component.css'],
})
export class CollectibleCardComponent implements OnInit {
  @Input() collectible: Collectible | Song;

  @Output() collectibleCollected: EventEmitter<
    Collectible | Song
  > = new EventEmitter();

  collectionForm: FormGroup;
  imageSrc: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.collectionForm = this.formBuilder.group({
      collected: [this.collectible.collected],
    });
  }

  toggleCollectibleCollected(): void {
    this.collectibleCollected.emit(this.collectible);
  }
}
