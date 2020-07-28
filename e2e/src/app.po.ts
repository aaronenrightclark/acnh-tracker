import { browser, by, element, promise } from 'protractor';

export class LandingPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getH1(): Promise<string> {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}

export class BugTrackerView {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'bugs') as Promise<unknown>;
  }

  isBugTrackerContainerDisplayed(): Promise<boolean> {
    return element(
      by.className('bug-tracker-view-container')
    ).isDisplayed() as Promise<boolean>;
  }
}
