[README](../README.md) > Installation

# Installation
Install node and npm.

## Install Node

### Windows
See https://nodejs.org/en/download

Check version:

```
node -v
npm -v
```

### Mac
#### Install Homebrew
See https://brew.sh/ja/

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Set path
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/${USER}/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

#### Install nodebrew
See https://github.com/hokaccha/nodebrew

```
# Install nodebrew
curl -L git.io/nodebrew | perl - setup

# Set path
(echo; echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH ') >> /Users/${USER}/.zprofile

# Reloading config
source ~/.zprofile
```

#### Install nodejs

```
# Install latest version
nodebrew install latest

# Confirm the version
nodebrew list

# Use specific version
nodebrew use ${YOUR_NODE_VERSION}

# Confirm versions
node -v
npm -v
```

## Clone repository

```
git clone https://github.com/daipresents/playwright.git
cd playwright

# Install library
npm install

# Install test browser
npx playwright install

# Install Microsoft Edge
npx playwright install msedge
```

Create .env file for environmental variables.

```
// Mac
touch .env

// Windows: Create new .env file frm explore.
```

Sample. 

```
# BASE URL
BASE_URL='https://daipresents.com/'

# Basic auth. If you use these value, comment out and update playwright.config.ts
# BASIC_AUTH_ID='${ID}'
# BASIC_AUTH_PASS='${PASS}'
```

## Run sample test

```
# No UI
npx playwright test ./tests/sample.spec.ts

# With UI
npx playwright test ./tests/sample.spec.ts --ui
```

Good job!

## Appendix.

### Install Playwright
See https://playwright.dev/docs/intro

```
npm init playwright@latest
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
✔ Do you want to use TypeScript or JavaScript? · TypeScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · false
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
```

### Install dotenv
See https://github.com/motdotla/dotenv?tab=readme-ov-file

```
npm install dotenv --save
```
