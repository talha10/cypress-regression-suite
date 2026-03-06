# Cypress E2E Regression Suite

![Cypress](https://img.shields.io/badge/Cypress-13.6.1-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-lightgreen.svg)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF.svg)

## 📌 Project Overview
This repository contains a professional, robust automated regression suite using **Cypress**. It implements the **Page Object Model (POM)** design pattern combined with custom Cypress commands to ensure tests are fast, reliable, and DRY (Don't Repeat Yourself).

The target application under test is [SauceDemo](https://www.saucedemo.com/), a standard e-commerce training ground.

## 🏗️ Folder Structure
```
cypress-regression-suite/
├── cypress/
│   ├── e2e/               # Core spec files (.cy.js)
│   ├── pages/             # Page Object classes encapsulating locators and logic
│   ├── fixtures/          # Static test data (JSON files)
│   └── support/           # Custom commands and global hooks
├── cypress.config.js      # Main Cypress configuration
├── package.json           # Node dependencies and scripts
└── .github/workflows/     # CI pipeline configuration
```

## 🚀 Tech Stack
- **Framework**: Cypress (v13+)
- **Language**: JavaScript (ES6)
- **Reporting**: Mochawesome (HTML Reports)
- **CI/CD**: GitHub Actions

## ⚙️ Local Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/talhakhattak/cypress-regression-suite.git
   cd cypress-regression-suite
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

## 🧪 Running Tests Locally

- **Open Cypress Test Runner (Interactive Mode)**:
  ```bash
  npx cypress open
  ```
  *Select E2E Testing -> Choose a browser -> Click on a spec file to run.*

- **Run in Headless Mode (CLI)**:
  ```bash
  npx cypress run
  ```

- **Run Specific Spec File**:
  ```bash
  npx cypress run --spec "cypress/e2e/login.cy.js"
  ```

- **Generate Mochawesome HTML Report**:
  ```bash
  npm run test:report
  ```
  *(This custom script runs Cypress and merges Mochawesome JSON output into a single beautiful HTML file).*

## 🤖 Continuous Integration
This project integrates heavily with **GitHub Actions**. Upon any push to `main`, the CI pipeline will automatically:
- Checkout the code and setup Node.js.
- Install dependencies and cache standard browser binaries.
- Execute the Cypress headless test run.
- Generate and upload the Mochawesome HTML Report and Video recordings as build artifacts.

---

## 👤 Author
**Talha Khan** | Senior Software Quality Assurance Engineer  
[LinkedIn](https://www.linkedin.com/in/talha-khan-khattak/) | *Engineered for high-velocity front-end regressions.*
