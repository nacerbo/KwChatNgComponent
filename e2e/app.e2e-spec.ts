import { KwChatPage } from './app.po';

describe('kw-chat App', () => {
  let page: KwChatPage;

  beforeEach(() => {
    page = new KwChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
