import { browser, element, by } from 'protractor';

export class PrismPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('prism-root h1')).getText();
  }
}
