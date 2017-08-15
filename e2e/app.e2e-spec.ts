import { Ng4LearnPage } from './app.po';

describe('ng4-learn App', () => {
  let page: Ng4LearnPage;

  beforeEach(() => {
    page = new Ng4LearnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
