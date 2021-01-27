var LoginPage = require('../pages/loginPage.js');
var loginPage;
var TaskPage = require('../pages/taskPage.js');
var taskPage;
const loginData = require('../data/loginData.json');
const taskData = require('../data/taskData.json');

describe('Tasks Suite', function() {

    beforeEach(function (done){
        loginPage = new LoginPage();
        taskPage = new TaskPage();
        loginPage.openBrowser(loginData.url);
        loginPage.loginSuccess(loginData.user, loginData.password);
        browser.manage().timeouts().implicitlyWait(12000);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000000;
        done();
    });

    afterEach(function (done){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        done();
    });

    it('Create a new task', function(done) {
      taskPage.createNewTask(taskData.newTaskDescriptionBase, taskData.newTaskCommentBase);
      done();
    });

    fit('Create 10 new tasks', function(done) {
        taskPage.createMultiTasks(taskData.newTaskDescriptionBase, taskData.newTaskCommentBase, 10);
        done();
    });


  });