import { PrismPage } from './app.po';

describe('prism App', function() {
  let page: PrismPage;

  beforeEach(() => {
    page = new PrismPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('prism works!');
  });
});
