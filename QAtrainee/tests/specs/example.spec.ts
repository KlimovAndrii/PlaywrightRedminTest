import { test, expect } from '@playwright/test';
import MainPage from '../pageobjects/main.page';
import SearchPage from '../pageobjects/search.page';
import RegisterPage from '../pageobjects/register.page';
import LoginPage from '../pageobjects/login.page';
import DownloadPage from '../pageobjects/downloads.page';
import TaskPage from '../pageobjects/task.page';

test.describe("Test redmine.org", () => {
    
    test('Test case 1: Search for information by input', async ({ page }) => {
      
      const redmiPageMain = new MainPage(page);
      const redmiSearchPage = new SearchPage(page); 
      
      await redmiPageMain.navigate();
      
      await redmiPageMain.searchButton.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiPageMain.searchButton.isVisible()).toEqual(true);
      await redmiPageMain.searchButton.click();
      
      await redmiSearchPage.searchField.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiSearchPage.searchField.isVisible()).toEqual(true);
      await redmiSearchPage.searchField.type('some text')
    
    });

    test('Test case 2: Registration on redmine.org', async ({ page }) => {
                                                                            
      const redmiPageMain = new MainPage(page);
      const redmiRegisterPage = new RegisterPage(page); 
      await redmiPageMain.navigate();
      
      await redmiPageMain.registrationButton.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiPageMain.registrationButton.isVisible()).toEqual(true);
      await redmiPageMain.registrationButton.click();
      
      await redmiRegisterPage.userField.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiRegisterPage.userField.isVisible()).toEqual(true);
      await redmiRegisterPage.userField.type('test username')
                                                                          
      await redmiRegisterPage.passwordField.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiRegisterPage.passwordField.isVisible()).toEqual(true);
      await redmiRegisterPage.passwordField.type('test password')
                                                                          
      await redmiRegisterPage.confirmPasswordField.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiRegisterPage.confirmPasswordField.isVisible()).toEqual(true);
      await redmiRegisterPage.confirmPasswordField.type('password confirmation')
                                                                          
      await redmiRegisterPage.firstName.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiRegisterPage.firstName.isVisible()).toEqual(true);
      await redmiRegisterPage.firstName.type('test name')
    
      await redmiRegisterPage.lastName.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiRegisterPage.lastName.isVisible()).toEqual(true);
      await redmiRegisterPage.lastName.type('test lastname')
                                                                          
      await redmiRegisterPage.eMail.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiRegisterPage.eMail.isVisible()).toEqual(true);
      await redmiRegisterPage.eMail.type('test email')
                                                                          
      await redmiRegisterPage.language.waitFor({ state: 'visible', timeout: 10000 });
      await redmiRegisterPage.language.selectOption('uk');
      expect(await redmiRegisterPage.language.isVisible()).toEqual(true);
      
      await redmiRegisterPage.ircNick.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiRegisterPage.ircNick.isVisible()).toEqual(true);
      await redmiRegisterPage.ircNick.type('test nick')

      await redmiRegisterPage.submitButton.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiRegisterPage.submitButton.isVisible()).toEqual(true);
      await redmiRegisterPage.submitButton.click();

      await redmiRegisterPage.errorExplanation.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiRegisterPage.errorExplanation.isVisible()).toEqual(true);
      let errorExplanation1 = await redmiRegisterPage.errorExplanation.textContent(); 
      expect(await redmiRegisterPage.errorExplanation.textContent()).toContain("Password doesn't match confirmation"); /* Сообщение: "Email имеет неверное значение" */                                                                
                                                                          
    });

    test('Test case 3: Login on redmine.org', async ({ page }) => {    
      
      const redmiPageMain = new MainPage(page);
      const redmiLoginPage = new LoginPage(page); 
      await redmiPageMain.navigate();
     
      await redmiPageMain.loginButton.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiPageMain.loginButton.isVisible()).toEqual(true);
      await redmiPageMain.loginButton.click();

      await redmiLoginPage.inputUser.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiLoginPage.inputUser.isVisible()).toEqual(true);
      await redmiLoginPage.inputUser.type('test user')
      
      await redmiLoginPage.inputPassword.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiLoginPage.inputPassword.isVisible()).toEqual(true);
      await redmiLoginPage.inputPassword.type('test password')

      await redmiLoginPage.autoLogin.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiLoginPage.autoLogin.isVisible()).toEqual(true);
      await redmiLoginPage.autoLogin.click();
      
      await redmiLoginPage.submitButton2.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiLoginPage.submitButton2.isVisible()).toEqual(true);
      await redmiLoginPage.submitButton2.click();
           
      await redmiLoginPage.errorMessage.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiLoginPage.errorMessage.isVisible()).toEqual(true);
      let errorExplanation1 = await redmiLoginPage.errorMessage.textContent(); 
      expect(await redmiLoginPage.errorMessage.textContent()).toContain("Invalid user or password") /* Сообщение: "Неправильное имя пользователя или пароль" */
     
    });

    test('Test case 4: Open Download page', async ({ page }) => {    
      
      const redmiPageMain = new MainPage(page);
      const redmiDownloadPage = new DownloadPage(page); 
      await redmiPageMain.navigate();
       
      await redmiPageMain.downloadButton.waitFor({ state: 'visible', timeout: 10000 });                                            
      expect(await redmiPageMain.downloadButton.isVisible()).toEqual(true);
      await redmiPageMain.downloadButton.click();
      
      await redmiDownloadPage.downloadPage.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiDownloadPage.downloadPage.textContent()).toContain('Download'); /* Заголовок: "Download" */
    
    });

    test('Test case 5: Open Tasks page', async ({ page }) => {    
      
      const redmiPageMain = new MainPage(page);
      const redmiTaskPage = new TaskPage(page); 
      await redmiPageMain.navigate();
      
      await redmiPageMain.taskButton.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiPageMain.taskButton.isVisible()).toEqual(true);
      await redmiPageMain.taskButton.click(); 
      
      await redmiTaskPage.taskPageField.waitFor({ state: 'visible', timeout: 10000 });
      expect(await redmiTaskPage.taskPageField.textContent()).toContain('Issues'); /* Заголовок: "Задачи" */
                                                                                                          
    });

});


