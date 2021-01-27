exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    restartBrowserBetweenTests: true,
    capabilities: {
        'directConnect': true,
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--incognito', '--disable-web-security', '--ignore-certificate-errors', '--start-maximized']
        }
    },
    suites: [
        'test/loginTest.spec.js',
        'test/taskTest.spec.js',
    ]
}