# Testes Mobile Ebac Shop

# Automation Mobile Test

This is the repository for automation of tests for mobile, developed to work with WebDriverIO.

## Table of Contents

1. [Goal](#goal)
2. [Project Structure](#project-structure)
3. [Tests](#tests)
4. [Initial Setup](#initial-setup)
5. [Run Tests](#run-tests)

## Goal

The goal of this repository is to be easy to understand focused on developing automated tests for mobile, using [WebDriverIO](https://webdriver.io/), a progressive automation framework built to automate modern web and mobile applications.

## Project Structure

```
|--- .gtihub
|----- workflows
|--- app
|----- android
|----- ios
|--- config
|--- test
|----- screens
|----- specs
|--- Jenkinsfile
|--- package-lock.json
|--- package.json
```

## Tests

The tests were written using the JavaScript language with WebDriverIO.

## Run tests

### Initial Setup

1. Requires node. To install, execute `npm install node` or download [Node](https://nodejs.org/en/download/)
2. Run the command `npm install` to install dependencies
3. To run the tests locally on Appium, the `.env` must be configured to use the `ENVIRONMENT = local`
4. To run the tests on BrowserStack, the `.env` must be configured to use the `ENVIRONMENT = browserstack`, and must inform the `BS_USER`, `BS_KEY`, `ANDROID_APP_ID`, `IOS_APP_ID`
5. To run the tests on BrowserStack, the `.env` must be configured to use the `ENVIRONMENT = saucelabs`, and must inform the `SAUCE_USERNAME`, `SAUCE_ACCESS_KEY`
6. To run the tests on Android platform, the `.env` must be configured to use the `PLATFORM = android`
7. To run the tests on iOS platform, the `.env` must be configured to use the `PLATFORM = ios`

### Run Tests

- Run one of the commands below to run the tests.
  Examples:
- To run the tests, execute `npm run test`
- To generate the Allure reports, execute `npm run report`
<p>