var LoginPage = require('../pages/loginPage.js');
var loginPage;
const loginData = require('../data/loginData.json');

describe('Login Suite', () => {
    beforeEach(function (done){
        loginPage = new LoginPage();
        loginPage.openBrowser(loginData.url);
        browser.manage().timeouts().implicitlyWait(12000);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000000;
        done();
    });

    afterEach(function (done){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        done();
    });

    it('Login Sucess', function(done) {
        loginPage.loginSuccess(loginData.user, loginData.password);
        done();
    });

    it('Login Failed', function(done) {
        loginPage.loginFailed(loginData.user, loginData.passwordFailed);
        done();
    });

    it('Login Empty', function(done) {
        loginPage.loginEmpty();
        done();
    });
  });