import { Locator, Page } from '@playwright/test';

class DownloadPage {
    readonly page: Page;
    readonly downloadPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.downloadPage = page.locator('//h1[normalize-space(text())="Download"]'); 
    }
}

export default DownloadPage;