import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from './shared/models/app-state.model';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MockComponent } from 'ng-mocks';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  const initialState = {
    bugTrackerState: { encoded: '' },
    fishTrackerState: { encoded: '' },
    seaCreatureTrackerState: { encoded: '' },
    songTrackerState: { encoded: '' },
  } as AppState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        provideMockStore({}),
        MockComponent(HeaderNavComponent),
        {
          provide: ActivatedRoute,
          useValue: { queryParamMap: of({ has: () => {}, get: () => {} }) },
        },
      ],
      imports: [MatFormFieldModule, FormsModule, RouterTestingModule], // TODO: add router testing
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ACNH Tracker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ACNH Tracker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('ACNH Tracker');
  });
});
