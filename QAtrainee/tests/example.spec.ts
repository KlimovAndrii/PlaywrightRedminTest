import { test, expect } from '@playwright/test';

test.describe("navigation1", () => {
    
    test('Test case 1: Search for information by input', async ({ page }) => {
      await page.goto('https://www.redmine.org/');
      
      const searchButton = page.locator('//a[@href="/projects/redmine/search"]');  
      const searchButtonIsVisible = await searchButton.isVisible();
      //expect(searchButtonIsVisible).toEqual(true); // пример аналог строка 11
      expect(await searchButton.isVisible()).toEqual(true);
      //expect(searchButton).toBeVisible(); // пример аналог строка 11
      await searchButton.click();
      
      const searchField = page.locator('//input[@id="search-input"]') 
      const searchFieldIsVisible = await searchField.isVisible();
      expect(await searchField.isVisible()).toEqual(true);
      await searchField.type('some text')
    });

    test('Test case 2: Registration on redmine.org', async ({ page }) => {
      
      await page.goto('https://www.redmine.org/');
      
      const registrationButton = page.locator('//a[@href="/account/register"]');  
      const registrationButtonIsVisible = await registrationButton.isVisible();
      expect(await registrationButton.isVisible()).toEqual(true);
      await registrationButton.click();
      
      const userField = page.locator('//input[@id="user_login"]');
      const userFieldIsVisible = await userField.isVisible();
      expect(await userField.isVisible()).toEqual(true);
      await userField.type('test username');
      
      const passwordField = page.locator('//input[@id="user_password"]'); 
      const passwordFieldIsVisible = await passwordField.isVisible();
      expect(await passwordField.isVisible()).toEqual(true);
      await passwordField.type('test password');
      
      const confirmPasswordField = page.locator('//input[@id="user_password_confirmation"]'); 
      const confirmPasswordFieldIsVisible = await confirmPasswordField.isVisible();
      expect(await confirmPasswordField.isVisible()).toEqual(true);
      await confirmPasswordField.type('test confirmation');
      
      const firstName = page.locator('//input[@id="user_firstname"]'); 
      const firstNameIsVisible = await firstName.isVisible();
      expect(await firstName.isVisible()).toEqual(true);
      await firstName.type('test name');
      
      const lastName = page.locator('//input[@id="user_lastname"]'); 
      const lastNameIsVisible = await lastName.isVisible();
      expect(await lastName.isVisible()).toEqual(true);
      await lastName.type('test lastname');
      
      const eMail = page.locator('//input[@id="user_mail"]'); 
      const eMailIsVisible = await eMail.isVisible();
      expect(await eMail.isVisible()).toEqual(true);
      await eMail.type('test email');
      
      const language = page.locator('//select[@id="user_language"]'); 
      await language.selectOption('uk');
      expect(await language.isVisible()).toEqual(true);
      
      const ircNick = page.locator('//input[@id="user_custom_field_values_3"]'); 
      const ircNickIsVisible = await ircNick.isVisible();
      expect(await ircNick.isVisible()).toEqual(true);
      await ircNick.type('test nick');   
    
      const submitButton = page.locator('//input[@name="commit"]'); 
      const submitButtonIsVisible = await submitButton.isVisible();
      expect(await submitButton.isVisible()).toEqual(true);
      await submitButton.click();
      
      const errorExplanation = page.locator('//div[@id="errorExplanation"]');
      const errorExplanationIsVisible = await errorExplanation.isVisible();
      expect(await errorExplanation.isVisible()).toEqual(true);
      let errorExplanation1 = await errorExplanation.textContent();
      expect(await errorExplanation.textContent()).toContain("Password doesn't match confirmation"); // сайт "Email имеет неверное значение"
            
    });

    test('Test case 3: Login on redmine.org', async ({ page }) => {    
      await page.goto('https://www.redmine.org/');    
      
      const loginButton = page.locator('//a[@href="/login"]'); 
      const loginButtonIsVisible = await loginButton.isVisible();
      expect(await loginButton.isVisible()).toEqual(true);
      await loginButton.click();
      
      const inputUser = page.locator('//input[@id="username"]'); 
      const inputUserIsVisible = await inputUser.isVisible();
      expect(await inputUser.isVisible()).toEqual(true);
      await inputUser.type('test user');
      
      const inputPassword = page.locator('//input[@id="password"]'); 
      const inputPasswordIsVisible = await inputPassword.isVisible();
      expect(await inputPassword.isVisible()).toEqual(true);
      await inputPassword.type('test password');
      
      const autoLogin = page.locator('//input[@id="autologin"]'); 
      const autoLoginIsVisible = await autoLogin.isVisible();
      expect(await autoLogin.isVisible()).toEqual(true);
      await autoLogin.click();
      
      const submitButton2 = page.locator('//input[@type="submit"]'); 
      const submitButton2IsVisible = await submitButton2.isVisible();
      expect(await submitButton2.isVisible()).toEqual(true);
      await submitButton2.click();
      
      const errorMessage = page.locator('//div[@id="flash_error"]'); 
      const errorMessageIsVisible = await errorMessage.isVisible();
      expect(await errorMessage.isVisible()).toEqual(true);         
      let errorMassage1 = await errorMessage.selectText();
      expect(await errorMessage.textContent()).toContain('Invalid user or password'); // сайт "Неправильное имя пользователя или пароль"
    });

    test('Test case 4: Open Download page', async ({ page }) => {    
      await page.goto('https://www.redmine.org/'); 
      
      const downloadButton = page.locator('//a[@class="download"]'); 
      const downloadButtonIsVisible = await downloadButton.isVisible();
      expect(await downloadButton.isVisible()).toEqual(true);
      await downloadButton.click();
      
      let downloadPage = page.locator('//h1[normalize-space(text())="Download"]');  
      expect(await downloadPage.textContent()).toContain('Download'); // --- почему знак ¶
    });

    test('Test case 5: Open Tasks page', async ({ page }) => {    
      await page.goto('https://www.redmine.org/');     
      
      const taskButton = page.locator('//a[@class="issues"]'); 
      const taskButtonButtonIsVisible = await taskButton.isVisible();
      expect(await taskButton.isVisible()).toEqual(true);
      await taskButton.click(); 
      
      let taskPage = page.locator('//div[@id="content"]//following::h2');  
      expect(await taskPage.textContent()).toEqual('Issues'); // сайт "Задачи"
    
    });
});


