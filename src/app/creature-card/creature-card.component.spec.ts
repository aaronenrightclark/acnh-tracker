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

  const defaultCollectible = {
    index: 0,
    name: 'shiny thing',
    price: 100000,
    type: CollectibleType.BUG,
    location: [BugLocation.GROUND, BugLocation.ROCK],
    [COLLECTIBLE_KEY_COLLECTED]: false,
    [COLLECTIBLE_KEY_HAVE_MODEL]: false,
    [COLLECTIBLE_KEY_HAVE_MODEL_SUPPLIES]: false,
  } as Collectible;
  const defaultHemisphere = Hemisphere.NORTH;
  const defaultCardStyle = CardStyle.DETAILS;

  const defaultBaseHref = '/';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureCardComponent],
      providers: [
        FormBuilder,
        DatePipe,
        { provide: APP_BASE_HREF, useValue: defaultBaseHref },
      ],
      imports: [
        MatCardModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  describe('default configs', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CreatureCardComponent);
      component = fixture.componentInstance;
      component.collectible = defaultCollectible;
      component.hemisphere = defaultHemisphere;
      component.cardStyle = defaultCardStyle;
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

  describe('custom configs', () => {
    function setupCustomConfigTest(options?: {
      collectible?: Collectible;
      hemisphere?: Hemisphere;
      cardStyle?: CardStyle;
    }): void {
      fixture = TestBed.createComponent(CreatureCardComponent);
      component = fixture.componentInstance;
      component.collectible = options?.collectible || defaultCollectible;
      component.hemisphere = options?.hemisphere || Hemisphere.NORTH;
      component.cardStyle = options?.cardStyle || CardStyle.DETAILS;
    }

    describe('isActiveTime', () => {
      const data = [
        {
          testType: 'current hour is outside all available activity windows',
          timesActive: [
            { start: 0, end: 10 },
            { start: 13, end: 23 },
          ],
          currentHours: 12,
          expected: false,
        },
        {
          testType: 'current hour matches window with same start and end hour',
          timesActive: [{ start: 6, end: 6 }],
          currentHours: 6,
          expected: true,
        },
        {
          testType: 'current hour is inside window that wraps midnight',
          timesActive: [{ start: 22, end: 10 }],
          currentHours: 3,
          expected: true,
        },
        {
          testType:
            'collectible has no availability window (is available all day)',
          timesActive: [],
          currentHours: 1234, // hour is irrelevant for this test
          expected: true,
        },
        {
          testType: 'timesActive is falsy',
          timesActive: null,
          currentHours: -1234, // hour is irrelevant for this test
          expected: false,
        },
      ];

      data.forEach((testData) => {
        it(`should return ${testData.expected} when ${testData.testType}`, () => {
          const collectible = {
            ...defaultCollectible,
            timesActive: testData.timesActive,
          } as Collectible;
          setupCustomConfigTest({ collectible });
          const timesActive = testData.timesActive;
          spyOn(Date.prototype, 'getHours').and.returnValue(
            testData.currentHours
          );
          expect(component.isActiveTime()).toEqual(testData.expected);
        });
      });
    });

    describe('getMonths', () => {
      [
        {
          testDescription: `should shift monthsActive windows by 6 if hemisphere is ${
            Hemisphere[Hemisphere.SOUTH]
          }`,
          hemisphere: Hemisphere.SOUTH,
          monthsActive: [
            { start: 5, end: 7 },
            { start: 8, end: 4 },
          ],
          expected: 'Dec-Feb, Mar-Nov',
        },
        {
          testDescription: `should not shift monthsActive windows by 6 if hemisphere is ${
            Hemisphere[Hemisphere.NORTH]
          }`,
          hemisphere: Hemisphere.NORTH,
          monthsActive: [
            { start: 5, end: 7 },
            { start: 8, end: 4 },
          ],
          expected: 'Jun-Aug, Sep-May',
        },
        {
          testDescription: `should list only a single active month if activity window start and end are the same`,
          hemisphere: Hemisphere.NORTH,
          monthsActive: [{ start: 5, end: 5 }],
          expected: 'Jun',
        },
        {
          testDescription: `should return 'ALL YEAR' if monthsActive contains no activity windows`,
          hemisphere: Hemisphere.NORTH,
          monthsActive: [],
          expected: 'ALL YEAR',
        },
      ].forEach((testData) => {
        it(testData.testDescription, () => {
          const collectible = {
            ...defaultCollectible,
            monthsActive: testData.monthsActive,
          };
          const hemisphere = testData.hemisphere;
          setupCustomConfigTest({ collectible, hemisphere });
          expect(component.getMonths()).toEqual(testData.expected);
        });
      });
    });

    describe('getMonthsActive', () => {
      [
        {
          testDescription: `should shift monthsActive windows by 6 if hemisphere is ${
            Hemisphere[Hemisphere.SOUTH]
          }`,
          hemisphere: Hemisphere.SOUTH,
          monthsActive: [
            { start: 5, end: 7 },
            { start: 8, end: 4 },
          ],
          expected: [
            { start: 11, end: 1 },
            { start: 2, end: 10 },
          ],
        },
        {
          testDescription: `should not shift monthsActive windows by 6 if hemisphere is ${
            Hemisphere[Hemisphere.NORTH]
          }`,
          hemisphere: Hemisphere.NORTH,
          monthsActive: [
            { start: 5, end: 7 },
            { start: 8, end: 4 },
          ],
          expected: [
            { start: 5, end: 7 },
            { start: 8, end: 4 },
          ],
        },
        {
          testDescription: `should return 'undefined' if monthsActive is falsy`,
          hemisphere: Hemisphere.NORTH,
          monthsActive: null,
          expected: undefined,
        },
      ].forEach((testData) => {
        it(testData.testDescription, () => {
          const collectible = {
            ...defaultCollectible,
            monthsActive: testData.monthsActive,
          };
          const hemisphere = testData.hemisphere;
          setupCustomConfigTest({ collectible, hemisphere });
          expect(component.getMonthsActive()).toEqual(testData.expected);
        });
      });
    });

    describe('getTimes', () => {
      [
        {
          testDescription: `should translate 24hr times to AM/PM`,
          timesActive: [
            { start: 5, end: 13 },
            { start: 18, end: 4 },
          ],
          expected: '5 AM-1 PM, 6 PM-4 AM',
        },
        {
          testDescription: `should list only a single active hour if activity window start and end are the same`,
          timesActive: [{ start: 5, end: 5 }],
          expected: '5 AM',
        },
        {
          testDescription: `should return 'ALL DAY' if timesActive contains no activity windows`,
          timesActive: [],
          expected: 'ALL DAY',
        },
      ].forEach((testData) => {
        it(testData.testDescription, () => {
          const collectible = {
            ...defaultCollectible,
            timesActive: testData.timesActive,
          };
          setupCustomConfigTest({ collectible });
          expect(component.getTimes()).toEqual(testData.expected);
        });
      });
    });

    describe('getImageSrc', () => {
      it('should return src for existing image asset', () => {
        setupCustomConfigTest();
        expect(component.getImageSrc()).toEqual(
          defaultBaseHref + 'assets/collectibles/bugs/0-shinything.png'
        );
      });

      it('should return default src if unsupported collectible type', () => {
        const collectible = {
          ...defaultCollectible,
          type: 100,
        };
        setupCustomConfigTest({ collectible });
        expect(component.getImageSrc()).toEqual(
          defaultBaseHref + 'assets/default.png'
        );
      });

      it('should return default src if collectible name is falsy', () => {
        const collectible = {
          ...defaultCollectible,
          name: '',
        };
        setupCustomConfigTest({ collectible });
        expect(component.getImageSrc()).toEqual(
          defaultBaseHref + 'assets/default.png'
        );
      });
    });
  });
});
