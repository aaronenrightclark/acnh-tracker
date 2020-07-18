import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderNavComponent } from './header-nav.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MockComponent } from 'ng-mocks';
import { BugTrackerViewComponent } from '../bug-tracker-view/bug-tracker-view.component';

describe('HeaderNavComponent', () => {
  let component: HeaderNavComponent;
  let fixture: ComponentFixture<HeaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNavComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'bugs', component: MockComponent(BugTrackerViewComponent) },
        ]),
      ], // TODO: add other routes
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
