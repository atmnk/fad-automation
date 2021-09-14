export const config: WebdriverIO.Config = {
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{ 
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'Flutter',
        'appium:app': __dirname + '/../../purchasecounter/build/app/outputs/apk/debug/app-debug.apk'
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['mochawesome'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
