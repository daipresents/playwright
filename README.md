# Playwright (TypeScript) + BrowserStack Sample

## Install

```
git clone https://github.com/daipresents/playwright-browserstack.git
cd playwright-browserstack
npm init
```

## Environment variable

```
touch .env
```

Example.

```
# BASE URL
BASE_URL='https://daipresents.com/'

# BASIC AUTH
# BASIC_AUTH_ID='${ID}'
# BASIC_AUTH_PASS='${PASS}'

# BROWSERSTACK
# You can see these values here: https://www.browserstack.com/accounts/profile/details
BROWSERSTACK_USERNAME='${NAME}'
BROWSERSTACK_ACCESS_KEY='{KEY}'
```


## Run sample test

```
npx playwright test
```

With ui.

```
npx playwright test --ui
```

Good job!

# Appendix. 
## Install Playwright

See: https://playwright.dev/docs/intro

```
npm init playwright@latest
```

## Install dotenv

```
npm install dotenv --save
```
