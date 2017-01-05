import { AngularDeploymentPage } from './app.po';

describe('angular-deployment App', function() {
  let page: AngularDeploymentPage;

  beforeEach(() => {
    page = new AngularDeploymentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
