import { ProgamerPage } from './app.po';

describe('progamer App', () => {
  let page: ProgamerPage;

  beforeEach(() => {
    page = new ProgamerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
