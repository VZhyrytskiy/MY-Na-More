import { MYNaMorePage } from './app.po';

describe('my-na-more App', function() {
  let page: MYNaMorePage;

  beforeEach(() => {
    page = new MYNaMorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
