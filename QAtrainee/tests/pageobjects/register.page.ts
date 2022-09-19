import { Locator, Page } from '@playwright/test';

class RegisterPage {
    readonly page: Page;
    readonly userField: Locator;
    readonly passwordField: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly eMail: Locator;
    readonly language: Locator;
    readonly ircNick: Locator;
    readonly submitButton: Locator;
    readonly errorExplanation: Locator;
    readonly confirmPasswordField: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.userField = page.locator('//input[@id="user_login"]');
        this.userField = page.locator('//input[@id="user_login"]'); 
        this.passwordField = page.locator('//input[@id="user_password"]'); 
        this.confirmPasswordField = page.locator('//input[@id="user_password_confirmation"]'); 
        this.firstName = page.locator('//input[@id="user_firstname"]'); 
        this.lastName = page.locator('//input[@id="user_lastname"]'); 
        this.eMail = page.locator('//input[@id="user_mail"]'); 
        this.language = page.locator('//select[@id="user_language"]'); 
        this.ircNick = page.locator('//input[@id="user_custom_field_values_3"]'); 
        this.submitButton = page.locator('//input[@name="commit"]'); 
        this.errorExplanation = page.locator('//div[@id="errorExplanation"]'); 
    }
}
export default RegisterPage;