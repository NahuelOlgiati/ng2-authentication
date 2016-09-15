import { PrimusFrontendPage } from './app.po';

describe('primus-frontend App', function() {
  let page: PrimusFrontendPage;

  beforeEach(() => {
    page = new PrimusFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pri works!');
  });
});
