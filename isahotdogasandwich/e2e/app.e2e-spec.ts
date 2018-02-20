import { IsahotdogasandwichPage } from './app.po';

describe('isahotdogasandwich App', function() {
  let page: IsahotdogasandwichPage;

  beforeEach(() => {
    page = new IsahotdogasandwichPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
