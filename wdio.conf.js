const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter')

exports.config = {
    hostname: "localhost",
    port: 4723,
    path: "/wd/hub",
    // user: "thiagocesarandra_bchmnq",
    // key: "TXoj8ynAy5Peznqfk2qW",
    // services: ['browserstack'],
    services: ['appium'],
    specs: ["./test/specs/**/*.js"],
    framework: "mocha",
    capabilities: [
        {
            platformName: "Android",
            platformVersion: "8.1",
            deviceName: "ebac-qe",
            automationName: "UiAutomator2",
            app: join(process.cwd(), "./app/android/loja-ebac.apk"),
            appWaitActivity: "com.woocommerce.android.ui.login.LoginActivity",
            // 'app' : 'bs://9e015d87e13194d2eebf4899959cffa14c5fa030',
            // 'device' : 'Motorola Moto G9 Play',
            // 'os_version' : '10.0',  
            // 'project' : 'Aula de Device Farm',
            // 'build' : '1.0',
            // 'name': 'test_login_loja_ebac'
        },
    ],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000,
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
        [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
          }]],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (test, scenario, { error, duration, passed }) {
        driver.takeScreenshot();
    },
};
