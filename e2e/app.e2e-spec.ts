import { AngularGoBoardPage } from './app.po';

describe('angular-go-board App', () => {
  let page: AngularGoBoardPage;

  beforeEach(() => {
    page = new AngularGoBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
