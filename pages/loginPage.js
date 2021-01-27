var EC = protractor.ExpectedConditions;

var loginPage = function() {
    // Elements.

    // Links
    this.signInLink = element(by.xpath("//ul[@class='_3XsmI']/li/a[@href='/users/showlogin']"));
    
    // Inputs
    this.emailInput = element(by.id("email"));
    this.passwordInput = element(by.id("password"));

    //Buttons
    this.logInButton = element(by.xpath("//button[text()='Log in']"));

    //Span
    this.spanErrorMessage = element(by.xpath("//div[@class='error_msg']/span"));
    this.spanTodayLogged = element(by.xpath("//li[@id='filter_today']/a/span[@class='item_content']"));

    this.openBrowser = function(url = null) {
        browser.waitForAngularEnabled(false);
        browser.get(url); 
    }

    this.loginSuccess = function(email = null, password = null) {
        browser.waitForAngularEnabled(false);
        browser.wait(EC.elementToBeClickable(this.signInLink), 30000);
        this.signInLink.click();
        browser.sleep(5000);
        this.emailInput.sendKeys(email);
        browser.sleep(3000);
        this.passwordInput.sendKeys(password);
        browser.wait(EC.elementToBeClickable(this.logInButton), 30000);
        this.logInButton.click();
        browser.sleep(3000);
        expect(this.spanTodayLogged.isDisplayed());
    }

    this.loginFailed = function(email = null, passwordFailed = null, errorMessage = null) {
        browser.waitForAngularEnabled(false);
        browser.wait(EC.elementToBeClickable(this.signInLink), 30000);
        this.signInLink.click();
        browser.sleep(5000);
        this.emailInput.sendKeys(email);
        browser.sleep(3000);
        this.passwordInput.sendKeys(passwordFailed);
        browser.wait(EC.elementToBeClickable(this.logInButton), 30000);
        this.logInButton.click();
        browser.sleep(3000);
        expect(this.spanErrorMessage.isDisplayed());
    }

    this.loginEmpty = function() {
        browser.waitForAngularEnabled(false);
        browser.wait(EC.elementToBeClickable(this.signInLink), 30000);
        this.signInLink.click();
        browser.wait(EC.elementToBeClickable(this.logInButton), 30000);
        this.logInButton.click();
        browser.sleep(3000);
        expect(this.spanErrorMessage.isDisplayed());
    }


}
module.exports = loginPage;