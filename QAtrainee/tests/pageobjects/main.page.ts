import { Locator, Page } from '@playwright/test';

class MainPage {
    readonly page: Page;
    readonly searchButton: Locator;
    readonly registrationButton: Locator;
    readonly loginButton: Locator;
    readonly downloadButton: Locator;
    readonly taskButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchButton = page.locator('//a[@href="/projects/redmine/search"]'); 
        this.registrationButton = page.locator('//a[@href="/account/register"]');
        this.loginButton = page.locator('//a[@href="/login"]'); 
        this.downloadButton = page.locator('//a[@class="download"]'); 
        this.taskButton = page.locator('//a[@class="issues"]');
    }
    async navigate() {
        await this.page.goto('https://www.redmine.org/');
    }
          
}
export default MainPage;
