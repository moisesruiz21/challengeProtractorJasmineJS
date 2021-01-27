var EC = protractor.ExpectedConditions;

var taskPage = function() {
    // Elements.
    
    // Inputs
    this.textAreaCommentInput = element(by.id("quick_comment_input"));
    this.passwordInput = element(by.id("password"));

    //Buttons
    this.plusAddNewTask = element(by.xpath("//button[@class='plus_add_button']"));
    this.addTaskButton = element(by.xpath("//button[@class='ist_button ist_button_red']"));
    this.addCommentButton = element(by.xpath("//button[@class='item_action quick_note_action']"));
    this.cancelButton = element(by.xpath("//button[@class='cancel']"));
    this.cancelCommentButton = element(by.xpath("//button[@class='close_btn']"));

    //Span
    this.spanNewTask = element(by.xpath("//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']/span/br"));

    //Task List
    this.taskList = element.all(by.xpath("//div[@class='markdown_content task_content']"));

    this.generateString = function(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    this.createNewTask = function(message = null, comment = null) {
        browser.wait(EC.elementToBeClickable(this.plusAddNewTask), 30000);
        this.plusAddNewTask.click();
        browser.sleep(2000);
        this.spanNewTask.sendKeys(message);
        browser.wait(EC.elementToBeClickable(this.addCommentButton), 30000);
        this.addCommentButton.click();
        browser.sleep(2000);
        this.textAreaCommentInput.sendKeys(comment);
        browser.wait(EC.elementToBeClickable(this.cancelCommentButton), 30000);
        this.cancelCommentButton.click();
        browser.wait(EC.elementToBeClickable(this.addTaskButton), 30000);
        this.addTaskButton.click();
        browser.sleep(2000);
        browser.wait(EC.elementToBeClickable(this.cancelButton), 30000);
        this.cancelButton.click();
        this.taskList.then(function(items){
            expect(items.length).toBeGreaterThanOrEqual(1);
        });
        browser.sleep(2000);
    }

    this.createMultiTasks = function(messageBase = null, commentBase = null, qtyTasks) {
        var arrayMessages = [];
        for (var indexTasks = 0; indexTasks < qtyTasks ; indexTasks++) {
            var randomMessage = messageBase + ' ' + this.generateString(5);
            var randomComment = commentBase + ' ' + this.generateString(5);
            this.createNewTask(randomMessage, randomComment);
            arrayMessages.push(randomMessage);
        }
        expect(arrayMessages.length).toBe(10);
        this.taskList.then(function(items){
            expect(items.length).toBeGreaterThanOrEqual(10);
        });

    }



}
module.exports = taskPage;