import { BugTrackerView } from '../app.po';
import { browser, logging } from 'protractor';
describe('bug tracker view', () => {
  let view: BugTrackerView;

  beforeEach(() => {
    view = new BugTrackerView();
  });

  it('should display bug tracker view container', () => {
    view.navigateTo();
    expect(view.isBugTrackerContainerDisplayed()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
