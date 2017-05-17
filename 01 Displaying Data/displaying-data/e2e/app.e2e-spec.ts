import { DisplayingDataPage } from './app.po';

describe('displaying-data App', () => {
  let page: DisplayingDataPage;

  beforeEach(() => {
    page = new DisplayingDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
