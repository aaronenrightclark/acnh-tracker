import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureCardComponent } from './creature-card.component';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  COLLECTIBLE_KEY_COLLECTED,
  Collectible,
  CollectibleType,
  CardStyle,
} from '../shared/models/collectible.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Hemisphere } from '../shared/models/app-state.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BugLocation } from '../shared/models/collectible.model';
import {
  COLLECTIBLE_KEY_HAVE_MODEL,
  COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES,
} from '../shared/models/collectible.model';

describe('CreatureCardComponent', () => {
  let component: CreatureCardComponent;
  let fixture: ComponentFixture<CreatureCardComponent>;

  describe('default configs', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [CreatureCardComponent],
        providers: [
          FormBuilder,
          DatePipe,
          { provide: APP_BASE_HREF, useValue: '/' },
        ],
        imports: [
          MatCardModule,
          MatCheckboxModule,
          FormsModule,
          ReactiveFormsModule,
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
        type: CollectibleType.BUG,
        location: [BugLocation.GROUND, BugLocation.ROCK],
        [COLLECTIBLE_KEY_COLLECTED]: false,
        [COLLECTIBLE_KEY_HAVE_MODEL]: false,
        [COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES]: false,
      } as Collectible;
      component.hemisphere = Hemisphere.NORTH;
      component.cardStyle = CardStyle.DETAILS;
    });

    it('should create', () => {
      spyOn(component, 'getImageSrc').and.callFake(() => '');
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    describe('collectible checks', () => {
      const data = [
        {
          locator: '.collectible-collected-check',
          emitter: 'collectibleCollected',
        },
        {
          locator: '.model-collected-check',
          emitter: 'collectibleModelCollected',
        },
        {
          locator: '.model-supplies-check',
          emitter: 'haveCollectibleModelSupplies',
        },
      ];

      data.forEach((check) => {
        it(`${check.emitter} should emit collectible`, () => {
          const emit = spyOn(component[check.emitter], 'emit');
          spyOn(component, 'getImageSrc').and.callFake(() => '');
          fixture.detectChanges();
          const debugElement: DebugElement = fixture.debugElement;
          const checkbox: HTMLElement = debugElement.query(
            By.css(check.locator)
          ).nativeElement;

          checkbox.click();
          fixture.detectChanges();

          expect(emit).toHaveBeenCalledWith(component.collectible);
        });
      });
    });

    it('should return collectible locations', () => {
      spyOn(component, 'getImageSrc').and.callFake(() => '');
      fixture.detectChanges();
      expect(component.getLocation()).toEqual('GROUND, ROCK');
    });

    describe('isActiveMonth', () => {
      const data = [
        {
          testType: 'current month is outside all available activity windows',
          monthsActive: [
            { start: 1, end: 4 },
            { start: 7, end: 11 },
          ],
          currentMonth: 0,
          expected: false,
        },
        {
          testType:
            'current month matches window with same start and end months',
          monthsActive: [{ start: 6, end: 6 }],
          currentMonth: 6,
          expected: true,
        },
        {
          testType: 'current month is inside window that wraps year end',
          monthsActive: [{ start: 10, end: 2 }],
          currentMonth: 0,
          expected: true,
        },
        {
          testType:
            'collectible has no availability window (is available all year)',
          monthsActive: [],
          currentMonth: 1234, // month is irrelevant for this test
          expected: true,
        },
        {
          testType: 'monthsActive is falsy',
          monthsActive: null,
          currentMonth: -1234, // month is irrelevant for this test
          expected: false,
        },
      ];

      data.forEach((testData) => {
        it(`should return ${testData.expected} when ${testData.testType}`, () => {
          const monthsActive = testData.monthsActive;
          spyOn(component, 'getMonthsActive').and.returnValue(monthsActive);
          spyOn(Date.prototype, 'getMonth').and.returnValue(
            testData.currentMonth
          );
          expect(component.isActiveMonth()).toEqual(testData.expected);
        });
      });
    });
  });
});
