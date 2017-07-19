import { TestLazyPage } from './app.po';

describe('test-lazy App', () => {
  let page: TestLazyPage;

  beforeEach(() => {
    page = new TestLazyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
