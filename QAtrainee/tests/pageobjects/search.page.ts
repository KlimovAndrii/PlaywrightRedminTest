import { Locator, Page } from '@playwright/test';

class SearchPage {
    readonly page: Page;
    readonly searchField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('//input[@id="search-input"]');  
    }
}

export default SearchPage;