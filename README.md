![Logo](https://www.vtestcorp.com/secure/wp-content/uploads/2020/08/160-x-600-01.jpg)
# Web Automation Framework using Microsoft PlayWright with TypeScript

## Overview

This project is a Playwright framework using TypeScript and follows the Page Object Model (POM) design pattern for testing UI. It also incorporates data-driven testing by reading test data from JSON files.

## Features

- **Playwright**: Utilizes the power of Playwright to automate browser interactions.
- **TypeScript**: The framework is implemented using TypeScript for a more structured and maintainable codebase.
- **Page Object Model**: Follows Page Object Model design pattern
- **API Testing**: Supports API testing using Playwright's request fixture
- **Screenshot on Failure**: Automatically captures screenshots when a test step fails for better debugging.
- **Video on Failure**: Records a video of the test execution when a failure occurs.
- **Detailed Traces**: Provides detailed traces for better insights into test execution.
- **HTML Report**: Generates a beautiful HTML report to visualize test results.

## Prerequisites

Ensure you have the following installed:

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- TypeScript: `npm install -g typescript`
- Playwright: `npm install -g playwright`


## Getting Started

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/nisha7634/eGain.git

2. Install dependencies:
   ```bash
   npm install

3. Install all the browsers(Chromium, Firefox and Webkit):
   ```bash
   npx playwright install

4. Execute all the test cases at once:
   ```bash
   npx playwright test

### Folder structure
1. `allure-results` -> Contains allure reports.
2. `env` -> Multiple environments are handled eg. uat, prod and dev etc.
3. `page-objects` -> All the page (UI screen)
4. `playwright-report` -> Contains index.html file which is the html report provided by the playwright.
5. `test-results` -> All test results like screen shots, traces and videos are stored here.
6. `testdata` -> Contains all the json files containing test data seggregated according to the different environments like uat, prod and dev etc.
7. `tests` -> Contains all UI test scripts according to the UI screen pages.
8. `tests-api` -> contains typescript files with api test cases.
9. `package.json` -> Contains all the dependencies.
10. `playwrightconfig.ts` -> all the configurations are configured here in this file.
