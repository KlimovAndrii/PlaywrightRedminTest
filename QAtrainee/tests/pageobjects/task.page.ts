import { Locator, Page } from '@playwright/test';

class TaskPage {
    readonly page: Page;
    readonly taskPageField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.taskPageField = page.locator('//div[@id="content"]//following::h2');  
    }
}

export default TaskPage;