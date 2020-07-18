import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureCardComponent } from './creature-card.component';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import {
  COLLECTIBLE_KEY_COLLECTED,
  Collectible,
  CollectibleType,
} from '../shared/models/collectible.model';

describe('CreatureCardComponent', () => {
  let component: CreatureCardComponent;
  let fixture: ComponentFixture<CreatureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureCardComponent],
      providers: [
        FormBuilder,
        DatePipe,
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatureCardComponent);
    component = fixture.componentInstance;
    component.collectible = {
      index: 0,
      name: 'shiny thing',
      price: 100000,
      type: CollectibleType.SEA_CREATURE,
      [COLLECTIBLE_KEY_COLLECTED]: false,
    } as Collectible;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
