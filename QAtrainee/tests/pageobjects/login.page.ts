import { Locator, Page } from '@playwright/test';

class LoginPage {
    readonly page: Page;
    readonly inputUser: Locator;
    readonly inputPassword: Locator;
    readonly autoLogin: Locator;
    readonly submitButton2: Locator;
    readonly errorMessage: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.inputUser = page.locator('//input[@id="username"]'); 
        this.inputPassword = page.locator('//input[@id="password"]'); 
        this.autoLogin = page.locator('//input[@id="autologin"]'); 
        this.submitButton2 = page.locator('//input[@type="submit"]'); 
        this.errorMessage = page.locator('//div[@id="flash_error"]'); 
    }
}
export default LoginPage;