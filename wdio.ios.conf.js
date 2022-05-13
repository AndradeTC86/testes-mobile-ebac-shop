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
    suites:{
        products: [
            './test/specs/productView.spec.js'
        ]
    },
    framework: "mocha",
    capabilities: [
        {
            "platformName": "iOS",
            "deviceName": "iPhone 12 Pro",
            "platformVersion": "15.0",
            "orientation": "PORTRAIT",
            "automationName": "XCUITest",
            "app": join(process.cwd(), './app/ios/loja-ebac.app'),
            'newCommandTimeout': 240
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
