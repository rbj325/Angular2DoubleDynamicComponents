import { DoubleDynamicPage } from './app.po';

describe('double-dynamic App', function() {
  let page: DoubleDynamicPage;

  beforeEach(() => {
    page = new DoubleDynamicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
