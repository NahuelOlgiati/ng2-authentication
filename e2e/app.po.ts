import { browser, element, by } from 'protractor/globals';

export class PrimusFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pri-root h1')).getText();
  }
}
